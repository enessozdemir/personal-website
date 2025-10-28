type JobItemProps = {
  position: string;
  company: string;
  href?: string;
};

const JobItem = ({ position, company, href }: JobItemProps) => {
  return (
    <p className="text-lighter mt-2">
      {position} at{" "}
      <a className="text-light" href={href} target="_blank" rel="noreferrer">
        {company}
      </a>
    </p>
  );
};

export default JobItem;
