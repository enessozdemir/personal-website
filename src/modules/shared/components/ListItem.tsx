type ListItemProps = {
  context: string;
  href: string;
};

const ListItem = ({ context, href }: ListItemProps) => {
  return (
    <li>
      <a
        href={`#${href}`}
      >
        {context}
      </a>
    </li>
  );
};

export default ListItem;
