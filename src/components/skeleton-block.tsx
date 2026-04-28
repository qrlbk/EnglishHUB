"use client";

type SkeletonBlockProps = {
  className?: string;
};

export function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
  return <div aria-hidden className={`animate-pulse rounded-md bg-slate-200/80 dark:bg-slate-700/70 ${className}`} />;
}
