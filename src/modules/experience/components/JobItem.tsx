type JobItemProps = {
  position: string;
  company: string;
  href?: string;
};

const JobItem = ({ position, company, href }: JobItemProps) => {
  return (
    <p className="text-sm sm:text-base mt-2">
      {position} at{" "}
      <a className="low-opacity" href={href} target="_blank" rel="noreferrer">
        {company}
      </a>
    </p>
  );
};

export default JobItem;
