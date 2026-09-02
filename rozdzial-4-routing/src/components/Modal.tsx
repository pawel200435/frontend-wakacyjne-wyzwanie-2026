"use client";

import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in"
      onClick={onDismiss}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onDismiss}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}