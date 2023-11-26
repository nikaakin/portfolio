import { LIGHT_THEME, education, experience } from "@/config";
import { EducationCard, ExperienceCard } from "@/components";
import { ThemePropType } from "@/types";
import { EducationIcon, ExperienceIcon } from "@/Icons";

export const Past = ({ theme }: ThemePropType) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:gap-15 gap-8 items-start ">
      <div
        className={`flex  md:gap-10 gap-6 flex-col  border-2 rounded-xl md:py-7 md:px-5 py-5 px-3 ${
          theme === LIGHT_THEME ? "border-zinc-200" : "border-slate-800"
        }`}
      >
        <div
          className={`flex items-center gap-5 ml-2 ${
            theme === LIGHT_THEME ? "text-zinc-500" : "text-slate-300"
          }`}
        >
          <ExperienceIcon theme={theme} />
          <span>Education</span>
        </div>

        {experience.map((exp) => (
          <ExperienceCard key={exp.name} experience={exp} />
        ))}
      </div>

      <div
        className={`flex md:gap-10 gap-6  flex-col  border-2 rounded-xl md:py-7 md:px-5 py-5 px-3 ${
          theme === LIGHT_THEME ? "border-zinc-200" : "border-slate-800"
        }`}
      >
        <div
          className={`flex items-center gap-3  ${
            theme === LIGHT_THEME ? "text-zinc-500" : "text-slate-300"
          }`}
        >
          <EducationIcon theme={theme} />
          <span>Education</span>
        </div>
        {education.map((edu) => (
          <EducationCard key={edu.name} education={edu} />
        ))}
      </div>
    </div>
  );
};
