import TeamMemberCard from "@/components/TeamMemberCard";
import Script from 'next/script';

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
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 p-6">
      <TeamMemberCard name={NAME} role={ROLE} bio={BIO} skills={SKILLS} avatar_img={AVATAR_IMG} />
      <Script id="alert">
        alert("Sprawdź kartę!")
      </Script>
    </main>
  );
}
