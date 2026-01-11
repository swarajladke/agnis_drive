import React from "react";
import Image from "next/image";
import CloudLogo from "@/components/CloudLogo";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-[#000814] text-white">
      <section className="hidden w-1/2 items-center justify-center bg-[#000814] p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <div className="flex items-center gap-4">
            <CloudLogo size={82} />
            <h1 className="text-[44px] font-black tracking-tighter text-[#E0E7FF] animate-in slide-in-from-left-4 fade-in duration-1000 shimmer-text hover:scale-105 cursor-default">
              Agnis Drive
            </h1>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-[48px] leading-[56px] font-black tracking-tight text-white/90 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              Manage your files <br className="hidden xl:block" /> the best way
            </h1>
            <p className="text-[18px] leading-[28px] font-medium text-[#94A3B8]">
              A private, secure, and lightning-fast space for all your documents.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-brand/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/assets/images/files.png"
              alt="Files"
              width={400}
              height={400}
              className="relative transition-all duration-500 group-hover:rotate-1 group-hover:scale-[1.02] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-[#000814] p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden flex items-center gap-2">
          <CloudLogo size={50} />
          <h1 className="text-[32px] font-black tracking-tighter text-white animate-in slide-in-from-top-4 fade-in duration-1000 shimmer-text">
            Agnis Drive
          </h1>
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;
