import { education, experience } from "@/config";
import { EducationCard, ExperienceCard } from "@/components";
import { ThemePropType } from "@/types";

export const Past = ({ theme }: ThemePropType) => {
  return (
    <div>
      <div>
        {experience.map((exp) => (
          <ExperienceCard key={exp.name} experience={exp} theme={theme} />
        ))}
      </div>
      <div>
        {education.map((edu) => (
          <EducationCard key={edu.name} education={edu} theme={theme} />
        ))}
      </div>
    </div>
  );
};
