import Image from 'next/image'
import Link from 'next/link';

interface TeamMemberCardProps {
    name: string;
    role: string;
    bio: string;
    skills: string[];
    avatar_img: string;
}

export default function TeamMemberCard(props: TeamMemberCardProps) {
    return (
    <>
        <div className="w-full max-w-sm min-w-sm sm:max-w-md md:max-w-xl bg-white border-2 border-blue-700 rounded-tl-xl rounded-br-xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-xl hover:shadow-blue-900/50 transition-shadow flex flex-col gap-4 ">
            <div className="flex items-center gap-4">
                <div className="relative size-20 sm:size-25 shrink-0 rounded-full overflow-hidden border border-gray-200">
                    <Image
                        src={`/${props.avatar_img}`}
                        fill
                        alt='Avatar'
                    />
                </div>
            
                <div className="flex flex-col">
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">
                        {props.name} 
                    </p>
                    <p className="text-sm sm:text-base font-medium text-blue-700 font-kablammo">
                        {props.role}
                    </p>
                </div>
            </div>
            
            <div className="text-sm sm:text-base text-gray-600">
                <p><span className="font-semibold text-gray-800">BIO:</span> {props.bio} </p>
            </div>

            <div className="text-sm sm:text-base text-gray-700 pt-2 border-t border-blue-700">
                <p className="font-semibold text-gray-800">Skills:</p>
                <div className="flex flex-wrap gap-2 pt-2">
                    {props.skills.map((skill) => (
                        <span key={skill} className="inline-flex items-center px-3 py-1 rounded-full text-sm sm:text-base font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
                            {skill}</span>
                    ))}
                </div>
            </div>
            
            <div className='flex items-center justify-center mt-5'>
                <Link
                    href="https://solvro.pwr.edu.pl/pl/"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-sm hover:shadow active:scale-95 transition-all duration-200"
                    >
                    <span>Dowiedz się więcej</span>
                    <svg 
                        className="size-4 transition-transform duration-200 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="3" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
        
    </>
    );
}