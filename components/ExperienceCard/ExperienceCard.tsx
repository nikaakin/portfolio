import { LIGHT_THEME } from "@/config";
import { ExperienceType } from "@/types";
import Image from "next/image";

export const ExperienceCard = ({
  experience,
  theme,
}: {
  experience: ExperienceType;
  theme: string;
}) => {
  const s = styles(theme);

  return (
    <a
      className={s.CardWrapper}
      href={experience.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="rounded-full overflow-hidden w-9 h-9">
        <Image
          alt={experience.name}
          src={experience.logo}
          width={36}
          height={36}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex-1">
        <div className="capitalize leading-relaxed">{experience.name}</div>
        <div className="flex gap-10 items-start justify-between">
          <span className="text-zinc-600 text-sm">{experience.title}</span>
          <span className="text-zinc-400 text-sm">{experience.duration}</span>
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
