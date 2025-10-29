import { PiLink } from "react-icons/pi";

type ProjectItemProps = {
  projectTitle: string;
  projectDescription?: string;
  href: string;
};

const ProjectItem = ({
  projectTitle,
  projectDescription,
  href,
}: ProjectItemProps) => {
  return (
    <div className="mt-3">
      <div className="flex gap-2 items-center">
        <a href={href} target="_blank">
          {projectTitle}
        </a>
        <PiLink className="w-3 h-3" />
      </div>

      <p className="text-lighter text-md mt-1">{projectDescription}</p>
    </div>
  );
};

export default ProjectItem;
