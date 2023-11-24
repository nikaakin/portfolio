import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "@/Icons";

export const PersonalLinks = ({ theme }: { theme: string }) => {
  return (
    <div className="flex gap-3 md:gap-4 items-center">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/nika-cuckiridze-387063228/"
        className="opacity-70 hover:opacity-100 transition-opacity"
      >
        <LinkedinIcon theme={theme} />
      </a>
      <a
        target="_blank"
        href="https://github.com/nikaakin"
        className="opacity-70 hover:opacity-100 transition-opacity"
      >
        <GithubIcon theme={theme} />
      </a>
      <a
        target="_blank"
        href="https://leetcode.com/nikakin/"
        className="opacity-70 hover:opacity-100 transition-opacity"
      >
        <LeetcodeIcon theme={theme} />
      </a>
    </div>
  );
};
