"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { NAV_LINKS } from "@/src/config";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full py-6 flex justify-center">
      <Tabs value={pathname} className="w-auto">
        <TabsList className="grid grid-flow-col auto-cols-fr">
          {NAV_LINKS.map((link) => (
            <TabsTrigger key={link.id} value={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </header>
  );
}