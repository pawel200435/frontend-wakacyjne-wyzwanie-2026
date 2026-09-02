import { notFound } from "next/navigation";
import Modal from "@/components/Modal";
import { MOCK_USERS } from "@/data/mockUsers";

interface ModalPageProps {
  params: Promise<{ id: string }>;
}

export default async function UserModalPage({ params }: ModalPageProps) {
  const { id } = await params;
  const user = MOCK_USERS.find((u) => u.id === id);

  if (!user) {
    notFound();
  }

  return (
    <Modal>
      <div className="flex flex-col items-center text-center">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-indigo-50 mb-3 bg-slate-50 shadow-inner"
        />


        <h2 className="text-2xl font-bold text-slate-900">{user.name}</h2>
        <p className="text-slate-600 font-medium mb-4">{user.role}</p>

        <div className="w-full border-t border-slate-100 pt-4 mt-2">
          <p className="text-sm text-slate-600">
            Lubi pizzę:{" "}
            <span className="font-semibold text-slate-900">
              {user.likesPizza ? "Tak" : "Nie"}
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
}