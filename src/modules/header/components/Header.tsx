import HeaderActions from "./HeaderActions";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <header className="sticky w-full h-20 flex justify-between items-center">
      {/* Logo */}
      <HeaderLogo />
      {/* Actions */}
      <HeaderActions />
    </header>
  );
};

export default Header;
