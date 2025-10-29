import Title from "../../shared/components/Title";
import { PiDot } from "react-icons/pi";

const Contact = () => {
  return (
    <div className="mt-10">
      <Title content="Contact" />

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-1">
        <span className="text-blue text-sm sm:text-base">
          <a href="mailto:eness.ozdemir@outlook.com">
            eness.ozdemir@outlook.com
          </a>
        </span>

        <PiDot className="w-10 h-10 hidden sm:block" />

        <a
          href="/cv/Enes_Ozdemir_Resume.pdf"
          download={"Enes Özdemir Resume"}
          className="border rounded-full py-2 px-4 hover:opacity-80 transition-all text-sm sm:text-base text-center"
        >
          Get My Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
