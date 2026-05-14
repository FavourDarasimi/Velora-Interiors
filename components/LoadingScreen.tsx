"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

function LoadingBall() {
  return (
    <div className="w-10 h-10 rounded-full bg-[#8b5e34] animate-pulse shadow-lg" />
  );
}

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
        <LoadingBall />
      </div>
    );
  }

  return <>{children}</>;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [navigating, setNavigating] = useState(false);
  const prevPath = useRef(pathname);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      setNavigating(true);
      const timer = setTimeout(() => setNavigating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [pathname, mounted]);

  if (navigating) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingBall />
      </div>
    );
  }

  return <>{children}</>;
}
