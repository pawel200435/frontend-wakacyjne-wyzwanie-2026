// src/app/users/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { MOCK_USERS } from "@/data/mockUsers";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UserDetailPage({ params }: PageProps) {
  const { id } = await params;
  const user = MOCK_USERS.find((u) => u.id === id);

  if (!user) {
    notFound();
  }

  return (
    <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
      <Link
        href="/users"
        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 mb-6 transition-colors"
      >
        ← Wróć do listy użytkowników
      </Link>

      <div className="flex flex-col items-center text-center">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-28 h-28 rounded-full border-4 border-indigo-50 mb-4 bg-slate-50"
        />

        <h1 className="text-2xl font-bold text-slate-900">{user.name}</h1>
        <p className="text-indigo-600 font-medium mb-4">{user.role}</p>

        <div className="w-full border-t border-slate-100 pt-4 mt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
            <span>Lubi pizzę:</span>
            <span>{user.likesPizza ? "Tak" : "Nie"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}