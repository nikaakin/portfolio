import { EducationType } from "@/types";
import Image from "next/image";

export const EducationCard = ({ education }: { education: EducationType }) => {
  return (
    <div className="flex gap-3 flex-1 ">
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
    </div>
  );
};
