const Footer = () => {
  return (
    <div className="mt-10 flex justify-between items-center text-xs">
      <p>Think. Code. Improve.</p>

      <div className="flex gap-1 items-center">
        <p>{new Date().getFullYear()}</p>
        <span> · </span>
        <p className=""> Enes Özdemir</p>
      </div>
    </div>
  );
};

export default Footer;
