import HeaderActions from "./HeaderActions";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className="sticky w-full h-20 flex justify-between items-center">
      {/* Logo */}
      <HeaderLogo />
      {/* Navigation */}
      <HeaderNav />
      {/* Actions */}
      <HeaderActions />
    </header>
  );
};

export default Header;
