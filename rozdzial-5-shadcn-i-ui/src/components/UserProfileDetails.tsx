import { User } from "@/src/types/User";
import Image from "next/image";
import PizzaIcon from "@/src/components/PizzaIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";


interface UserProfileDetailsProps {
  user: User;
}

export function UserProfileDetails({ user }: UserProfileDetailsProps) {
  const { name, role, likesPizza, avatarUrl, description } = user;

  return (
    <Card className="@container relative max-w-full h-full flex flex-col min-h-64 overflow-hidden border shadow-sm p-0 gap-0">
      <div className="relative w-full h-32 @lg:h-48 rounded-inherit">
        <div className="absolute inset-0 z-1 bg-blue-300" />

        <div className="rounded-full size-16 @lg:size-24 absolute bg-white z-2 bottom-0 left-4 translate-y-1/2 border overflow-hidden shadow-md">
          <Image src={avatarUrl} alt="avatar" className="w-full h-full object-cover" fill loading="eager" />
        </div>
      </div>

      <CardHeader className="w-full pt-12 @lg:pt-16 px-6 pb-2 grid grid-cols-[1fr_auto] items-start">
        <div className="space-y-1">
          <CardTitle className="font-semibold text-xl @md:text-2xl leading-tight">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm @md:text-base">
            {role}
          </CardDescription>
        </div>

        {likesPizza && (
          <div className="size-10 grid place-items-center rounded-full bg-amber-50 text-amber-600 shadow-xs">
            <PizzaIcon />
          </div>
        )}
      </CardHeader>

      <CardContent className="px-6 pb-6 pt-2">
        <p className="text-muted-foreground text-sm leading-relaxed @lg:max-w-md">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}