import { User } from "../types/User";
import { UserProfileCard } from "./UserProfileCard";
import { MOCK_USERS } from "@/data/mockUsers";

export function UserProfileList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {MOCK_USERS.map((user) => (
        <UserProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
}
