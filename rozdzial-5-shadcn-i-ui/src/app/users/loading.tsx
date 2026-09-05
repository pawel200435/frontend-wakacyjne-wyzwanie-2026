import { Skeleton } from "@/src/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 w-full">
      {Array(3)
        .fill(0)
        .map((_, key) => (
          <div
            key={key}
            className="border rounded-xl p-4 shadow-xs flex flex-col justify-between min-h-[260px] bg-card"
          >
            <Skeleton className="size-24 rounded-full mx-auto mb-4" />
            <div className="flex flex-col items-center gap-2 mb-6">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <Skeleton className="h-10 w-full rounded-md mt-auto" />
          </div>
        ))}
    </div>
  );
}