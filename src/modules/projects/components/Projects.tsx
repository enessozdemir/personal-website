import Title from "../../shared/components/Title";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div className="mt-10">
      <Title content="Projects" />

      <ProjectItem
        projectTitle="Blog Application"
        projectDescription="Built a full-stack blog application using React, Node.js, Express, and MongoDB, 
        implementing JWT authentication, Firebase integration, and a modern UI with Tailwind CSS to 
        ensure responsive design, strong performance, and engaging user interaction."
        href="https://mern-blog-3giq.onrender.com/"
      />

      <ProjectItem
        projectTitle="Taner Peyzaj"
        projectDescription="Developed a modern, responsive website using Next.js, TypeScript, and 
        Tailwind CSS, with a focus on scalability, performance, and accessibility. 
        Applied responsive design principles and smooth animations to deliver a refined, 
        user-friendly experience."
        href="https://tanerpeyzaj.vercel.app/"
      />
    </div>
  );
};

export default Project;
