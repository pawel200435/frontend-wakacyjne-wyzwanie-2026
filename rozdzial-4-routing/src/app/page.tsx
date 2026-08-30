import TeamMemberCard from "@/components/TeamMemberCard";

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
    <main className="flex-1 flex flex-col justify-between mx-auto max-w-5xl p-8 text-center">
      <div className="w-full">
        <TeamMemberCard name={NAME} role={ROLE} bio={BIO} skills={SKILLS} avatar_img={AVATAR_IMG} />
      </div>
    </main>
  );
}
