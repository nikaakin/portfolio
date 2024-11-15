import { LIGHT_THEME } from "@/config";
import { EducationType } from "@/types";
import Image from "next/image";

export const EducationCard = ({
  education,
  theme,
}: {
  education: EducationType;
  theme: string;
}) => {
  const s = styles(theme);
  return (
    <a
      className={s.CardWrapper}
      href={education.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="rounded-full overflow-hidden w-9 h-9">
        <Image
          alt={education.name}
          src={education.logo}
          width={36}
          height={36}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <div className="capitalize leading-relaxed">{education.name}</div>
        <div className="flex gap-10 items-start ">
          <span className="text-zinc-600 text-sm">{education.degree}</span>
          <span className="text-zinc-400 text-sm">{education.duration}</span>
        </div>
      </div>
    </a>
  );
};

const styles = (theme: string) => ({
  CardWrapper: `flex gap-3 py-2 px-3 flex-1  shadow-header transition-shadow rounded-lg items-center  ${
    theme == LIGHT_THEME
      ? "hover:shadow-slate-300 bg-slate-100 bg-opacity-70 hover:bg-opacity-100"
      : "hover:shadow-gray-800 bg-black bg-opacity-40 hover:bg-opacity-100"
  } transition-colors duration-200 `,
});
