import { createSessionClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const { storage } = await createSessionClient();

        const endpoint = appwriteConfig.endpointUrl;
        const projectId = appwriteConfig.projectId;
        const bucketId = appwriteConfig.bucketId;

        // Default to view (preview), check for download param
        const { searchParams } = new URL(request.url);
        const isDownload = searchParams.get("download") === "true";

        let fileBuffer;
        let mimeType = "application/octet-stream";
        let fileName = "file";

        try {
            // Get file metadata for name and mime type
            const file = await storage.getFile(bucketId, id);
            fileName = file.name;
            mimeType = file.mimeType || "application/octet-stream";

            if (isDownload) {
                fileBuffer = await storage.getFileDownload(bucketId, id);
            } else {
                // View/Preview
                fileBuffer = await storage.getFileView(bucketId, id);
            }
        } catch (e) {
            console.error("Error fetching file from Appwrite:", e);
            return NextResponse.json({ error: "File not found or access denied" }, { status: 404 });
        }

        return new NextResponse(fileBuffer, {
            headers: {
                "Content-Type": mimeType,
                "Content-Disposition": isDownload ? `attachment; filename="${fileName}"` : `inline; filename="${fileName}"`,
            },
        });

    } catch (error) {
        console.error("Proxy error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
