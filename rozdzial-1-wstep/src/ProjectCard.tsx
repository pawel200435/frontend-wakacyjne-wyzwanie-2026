import { useState } from "react";

interface Technology {
    id: string;
    name: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: Technology[];
}

export function ProjectCard({title, description, technologies}: ProjectCardProps){
    const [status, setStatus] = useState("W trakcie");

    function changeStatus(){
        setStatus(status === 'W trakcie' ? "Ukończony" : "W trakcie")
    }

    return (
        <>
            <p className="font-bold mb-3">Tytuł: {title} - {description}</p>
            <ul>
                {technologies.map((technology) => (
                    <li key={technology.id}>{technology.name}</li>
                ))}
            </ul>
            
            <button type="button" onClick={changeStatus} className="mt-4 px-4 py-2 bg-blue-400 text-lg text-white rounded-lg hover:bg-blue-500">{status}</button>

        </>
    )
}
