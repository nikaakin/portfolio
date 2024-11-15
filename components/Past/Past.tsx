import { LIGHT_THEME, education, experience } from "@/config";
import { EducationCard, ExperienceCard } from "@/components";
import { ThemePropType } from "@/types";
import { EducationIcon, ExperienceIcon } from "@/Icons";

export const Past = ({ theme }: ThemePropType) => {
  const s = styles(theme);

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:gap-15 gap-8 items-start ">
      <div className={s.cardWrapper}>
        <div className={s.cardHeader}>
          <ExperienceIcon theme={theme} />
          <span>Experience</span>
          <hr className="w-full h-1 border-0 bg-zinc-200" />
        </div>

        {experience.map((exp) => (
          <ExperienceCard key={exp.name} experience={exp} theme={theme} />
        ))}
      </div>

      <div className={s.cardWrapper}>
        <div className={s.cardHeader}>
          <EducationIcon theme={theme} />
          <span>Education</span>
          <hr className="w-full h-1 border-0 bg-zinc-200" />
        </div>
        {education.map((edu) => (
          <EducationCard key={edu.name} education={edu} theme={theme} />
        ))}
      </div>
    </div>
  );
};

const styles = (theme: string) => ({
  cardWrapper: `flex  flex-col gap-2 px-2 rounded-xl pb-5 ${
    theme === LIGHT_THEME
      ? "border-zinc-200 border-2"
      : "border-zinc-600 border"
  }`,
  cardHeader: `flex items-center gap-5 ml-2 md:py-7 md:px-5 py-5 px-3 ${
    theme === LIGHT_THEME ? "text-zinc-500" : "text-slate-300"
  }`,
});
