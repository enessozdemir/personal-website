import ListItem from "../../shared/components/ListItem";

const HeaderNav = () => {
  return (
    <nav>
      <ul className="hidden xl:flex gap-5 font-medium low-opacity">
        <ListItem context="About" href="about" />
        <ListItem context="Experience" href="experience" />
        <ListItem context="Projects" href="projects" />
        <ListItem context="Contact" href="contact" />
      </ul>
    </nav>
  );
};

export default HeaderNav;
