import { ExperienceType } from "@/types";
import Image from "next/image";

export const ExperienceCard = ({
  experience,
}: {
  experience: ExperienceType;
}) => {
  return (
    <div className="flex gap-3 flex-1">
      <div className="rounded-full overflow-hidden w-9 h-9">
        <Image
          alt={experience.name}
          src={experience.logo}
          width={36}
          height={36}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex-1 ">
        <div className="capitalize leading-relaxed">{experience.name}</div>
        <div className="flex gap-10 items-start ">
          <span className="text-zinc-600 text-sm">{experience.title}</span>
          <span className="text-zinc-400 text-sm">{experience.duration}</span>
        </div>
      </div>
    </div>
  );
};
