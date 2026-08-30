import { User } from "@/types/User";

export const MOCK_USERS: User[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Frontend Developer",
    avatarUrl: "https://robohash.org/alex",
    likesPizza: true,
  },
  {
    id: "2",
    name: "Sam Chen",
    role: "UI/UX Designer",
    avatarUrl: "https://robohash.org/sam",
    likesPizza: true,
  },
  {
    id: "3",
    name: "Jordan Taylor",
    role: "Backend Engineer",
    avatarUrl: "https://robohash.org/jordan",
    likesPizza: false,
  },
];