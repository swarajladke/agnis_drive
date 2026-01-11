"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn, convertFileSize } from "@/lib/utils";
import FormattedDateTime from "@/components/FormattedDateTime";

interface Props {
    summary: {
        title: string;
        size: number;
        latestDate: string;
        icon: string;
        url: string;
        type: string;
    };
}

const SummaryCard = ({ summary }: Props) => {
    const cardRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!cardRef.current) return;
        const { left, top } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <Link
            href={summary.url}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={cn("dashboard-summary-card interactive-spotlight-card", `card-${summary.type}`)}
        >
            <div className="card-glass-texture" />
            <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                    <div className={cn("summary-type-icon-badge", `badge-${summary.type}`)}>
                        <Image
                            src={summary.icon}
                            width={24}
                            height={24}
                            alt={summary.title}
                            className="summary-type-icon"
                        />
                    </div>
                    <h4 className="summary-type-size">
                        {convertFileSize(summary.size) || 0}
                    </h4>
                </div>

                <div className="flex flex-col gap-1">
                    <h5 className="summary-type-title">{summary.title}</h5>
                    <FormattedDateTime
                        date={summary.latestDate}
                        className="summary-type-date"
                    />
                </div>
            </div>
        </Link>
    );
};

export default SummaryCard;
