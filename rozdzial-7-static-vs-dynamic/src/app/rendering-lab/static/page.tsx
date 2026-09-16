import { CurrentTimeCard } from "@/components/current-time-card";
export const dynamic = 'force-static';

export default function StaticPage() {
  return (
    <CurrentTimeCard
      title="Statycznie"
      description="Nie dodawaj konfiguracji. W App Routerze statyczność jest domyślna."
    />
  );
}
