import Title from "../../shared/components/Title";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div className="mt-10">
      <Title content="Projects" />

      <ProjectItem
        projectTitle="Blog Application"
        projectDescription="Built a full-stack blog application using React, Node.js, Express, and MongoDB, 
        focusing on responsive design, performance, and user engagement. Implemented JWT authentication, 
        Firebase integration, and modern UI with Tailwind CSS, strengthening my expertise in scalable 
        full-stack development and intuitive user experience design."
        href="https://mern-blog-3giq.onrender.com/"
      />

      <ProjectItem
        projectTitle="Taner Peyzaj"
        projectDescription="Developed a modern, responsive website using Next.js, TypeScript, and 
        Tailwind CSS, emphasizing scalability, performance, and accessibility. 
        Focused on applying responsive design principles and smooth animations to create a 
        visually engaging and seamless user experience."
        href="https://tanerpeyzaj.vercel.app/"
      />
    </div>
  );
};

export default Project;
