import { CurrentTimeCard } from "@/components/current-time-card";
export const dynamic = "force-dynamic";

export default function DynamicPage() {
  return (
    <CurrentTimeCard
      title="Dynamicznie"
      description="Ta trasa ma pokazywać nowy czas przy każdym odświeżeniu."
    />
  );
}
