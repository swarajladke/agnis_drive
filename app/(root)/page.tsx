import Image from "next/image";
import Link from "next/link";
import { Models } from "node-appwrite";

import ActionDropdown from "@/components/ActionDropdown";
import { Chart } from "@/components/Chart";
import { FormattedDateTime } from "@/components/FormattedDateTime";
import { Thumbnail } from "@/components/Thumbnail";
import { Separator } from "@/components/ui/separator";
import SummaryCard from "@/components/SummaryCard";
import { convertFileSize, getUsageSummary, constructProxyUrl } from "@/lib/utils";
import { getFiles, getTotalSpaceUsed } from "@/lib/actions/file.actions";

import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) redirect("/sign-in");
  // Parallel requests
  const [files, totalSpace] = await Promise.all([
    getFiles({ types: [], limit: 10 }),
    getTotalSpaceUsed(),
  ]);

  // Get usage summary
  const usageSummary = getUsageSummary(totalSpace);

  return (
    <div className="dashboard-container">
      <section>
        <Chart used={totalSpace.used} />

        {/* Uploaded file type summaries */}
        <ul className="dashboard-summary-list">
          {usageSummary.map((summary) => (
            <SummaryCard key={summary.title} summary={summary} />
          ))}
        </ul>
      </section>

      {/* Recent files uploaded */}
      <section className="dashboard-recent-files">
        <h2 className="h3 xl:h2 text-[#E0E7FF]">Recent files uploaded</h2>
        {files.documents.length > 0 ? (
          <ul className="mt-5 flex flex-col gap-5">
            {files.documents.map((file: Models.Document) => (
              <Link
                href={constructProxyUrl(file.bucketFileId)}
                target="_blank"
                className="flex items-center gap-3"
                key={file.$id}
              >
                <Thumbnail
                  type={file.type}
                  extension={file.extension}
                  url={constructProxyUrl(file.bucketFileId)}
                />

                <div className="recent-file-details">
                  <div className="flex flex-col gap-1">
                    <p className="recent-file-name">{file.name}</p>
                    <FormattedDateTime
                      date={file.$createdAt}
                      className="caption"
                    />
                  </div>
                  <ActionDropdown file={file} />
                </div>
              </Link>
            ))}
          </ul>
        ) : (
          <p className="empty-list">No files uploaded</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
