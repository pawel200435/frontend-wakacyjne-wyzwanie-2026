import { UserProfileList } from "@/components/UserProfilesList";

async function fetchUsersWithDelay() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  //error.tsx:
  // throw new Error("Błąd połączenia");
}

export default async function UsersPage() {
  await fetchUsersWithDelay();

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="mt-10 text-3xl font-bold text-slate-800 mb-6">Lista użytkowników</h1>
      <UserProfileList/>
    </div>
  );
}