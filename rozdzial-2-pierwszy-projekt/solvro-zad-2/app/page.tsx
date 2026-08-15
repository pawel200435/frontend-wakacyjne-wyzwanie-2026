import Image from "next/image";
import TeamMemberCard from "./TeamMemberCard";

export default function Home() {
  const NAME = 'Paweł Goliński';
  const ROLE = 'Student';
  const BIO = 'Uczestnik wakacyjnego kursu frontend od solvro.'
  const SKILLS = [
    'TypeScript',
    'React',
    'NextJS',
    'TailwindCSS'
  ];
  const AVATAR_IMG = 'avatar.jpg';

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex items-center justify-center w-full p-4">
        <TeamMemberCard name={NAME} role={ROLE} bio={BIO} skills={SKILLS} avatar_img={AVATAR_IMG} />
      </main>
    </div>
  );
}
