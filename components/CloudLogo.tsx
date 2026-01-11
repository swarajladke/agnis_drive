"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    size?: number;
}

const CloudLogo = ({ className, size = 44 }: Props) => {
    return (
        <div
            className={cn("group relative flex items-center justify-center transition-all duration-700 hover:scale-110", className)}
            style={{ width: size, height: size, perspective: '1200px' }}
        >
            {/* Dynamic Background Glow */}
            <div className="absolute inset-0 bg-indigo-600/20 rounded-full blur-2xl animate-pulse group-hover:bg-indigo-500/40 transition-all duration-700" />

            {/* 3D Stacked Cloud with Floating Animation */}
            <div
                className="relative w-full h-full transform-style-3d transition-all duration-1000 group-hover:rotate-y-12 group-hover:rotate-x-6"
                style={{ animation: 'float 6s ease-in-out infinite' }}
            >
                <style dangerouslySetInnerHTML={{
                    __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
            50% { transform: translateY(-10%) rotateX(5deg) rotateY(-5deg); }
          }
          .transform-style-3d { transform-style: preserve-3d; }
        `}} />

                {/* Layer 1: The Deep Base (Contact Shadow) */}
                <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full opacity-30 blur-[2px]"
                    style={{ transform: 'translateZ(-12px) scale(0.95)' }}
                >
                    <path
                        d="M15.6273 17.2771H3.8537C1.70821 17.1586 0 15.1521 0 12.978C0 11.4782 0.813241 10.1705 2.0188 9.46347C1.90846 9.16515 1.85125 8.84639 1.85125 8.51129C1.85125 6.9788 3.0895 5.74055 4.62199 5.74055C4.953 5.74055 5.27176 5.79776 5.57009 5.9081C6.45689 4.02825 8.36943 2.72461 10.5926 2.72461C13.4696 2.7287 15.8398 4.93139 16.1095 7.73891C18.3204 8.11897 20 10.1664 20 12.4835C20 14.96 18.0711 17.1055 15.6273 17.2771Z"
                        fill="#000"
                    />
                </svg>

                {/* Layer 2: Deep Indigo Foundation */}
                <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full"
                    style={{ transform: 'translateZ(-8px)' }}
                >
                    <path
                        d="M15.6273 17.2771H3.8537C1.70821 17.1586 0 15.1521 0 12.978C0 11.4782 0.813241 10.1705 2.0188 9.46347C1.90846 9.16515 1.85125 8.84639 1.85125 8.51129C1.85125 6.9788 3.0895 5.74055 4.62199 5.74055C4.953 5.74055 5.27176 5.79776 5.57009 5.9081C6.45689 4.02825 8.36943 2.72461 10.5926 2.72461C13.4696 2.7287 15.8398 4.93139 16.1095 7.73891C18.3204 8.11897 20 10.1664 20 12.4835C20 14.96 18.0711 17.1055 15.6273 17.2771Z"
                        fill="#312E81"
                    />
                </svg>

                {/* Layer 3: Main Gradient Color */}
                <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full"
                    style={{ transform: 'translateZ(-4px)' }}
                >
                    <path
                        d="M15.6273 17.2771H3.8537C1.70821 17.1586 0 15.1521 0 12.978C0 11.4782 0.813241 10.1705 2.0188 9.46347C1.90846 9.16515 1.85125 8.84639 1.85125 8.51129C1.85125 6.9788 3.0895 5.74055 4.62199 5.74055C4.953 5.74055 5.27176 5.79776 5.57009 5.9081C6.45689 4.02825 8.36943 2.72461 10.5926 2.72461C13.4696 2.7287 15.8398 4.93139 16.1095 7.73891C18.3204 8.11897 20 10.1664 20 12.4835C20 14.96 18.0711 17.1055 15.6273 17.2771Z"
                        fill="url(#main-cloud-gradient)"
                    />
                    <defs>
                        <linearGradient id="main-cloud-gradient" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6366f1" />
                            <stop offset="1" stopColor="#a855f7" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Layer 4: Glass Surface Shine */}
                <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full opacity-60"
                    style={{ transform: 'translateZ(4px)' }}
                >
                    <path
                        d="M15.6273 17.2771H3.8537C1.70821 17.1586 0 15.1521 0 12.978C0 11.4782 0.813241 10.1705 2.0188 9.46347C1.90846 9.16515 1.85125 8.84639 1.85125 8.51129C1.85125 6.9788 3.0895 5.74055 4.62199 5.74055C4.953 5.74055 5.27176 5.79776 5.57009 5.9081C6.45689 4.02825 8.36943 2.72461 10.5926 2.72461C13.4696 2.7287 15.8398 4.93139 16.1095 7.73891C18.3204 8.11897 20 10.1664 20 12.4835C20 14.96 18.0711 17.1055 15.6273 17.2771Z"
                        fill="url(#glass-shine-top)"
                        stroke="white"
                        strokeWidth="0.15"
                        strokeOpacity="0.4"
                    />
                    <defs>
                        <linearGradient id="glass-shine-top" x1="0" y1="0" x2="15" y2="15" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.4" />
                            <stop offset="0.5" stopColor="white" stopOpacity="0" />
                            <stop offset="1" stopColor="white" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Layer 5: The Glowing Core (Flame) */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(14px)' }}>
                    <div className="relative size-1/3 flex items-center justify-center translate-y-[-5%] overflow-visible">
                        {/* Massive Outer Atmosphere */}
                        <div className="absolute size-[300%] bg-cyan-500 rounded-full blur-[12px] opacity-20 animate-pulse" />

                        {/* Core Body */}
                        <div className="absolute size-full bg-cyan-400 rounded-full blur-[0.5px] shadow-[0_0_20px_#22d3ee,inset_0_0_8px_#fff]" />

                        {/* Center Heat Point */}
                        <div className="absolute size-1/2 bg-white rounded-full blur-[0.3px] opacity-100 shadow-[0_0_12px_#fff]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloudLogo;
