import Title from "../../shared/components/Title";
import JobItem from "./JobItem";

const Experience = () => {
  return (
    <div className="mt-10">
      <Title content="Experience" />

      <JobItem
        position="Servicenow Developer"
        company="Unite Bilgi Teknolojileri"
        href="https://www.unitebt.com/"
      />

      <JobItem
        position="Low Code Developer"
        company="Unite Bilgi Teknolojileri"
        href="https://www.unitebt.com/"
      />

      <JobItem
        position="Business Analyst Intern"
        company="Etiya Bilgi Teknolojileri"
        href="https://www.etiya.com/en/"
      />
    </div>
  );
};

export default Experience;
