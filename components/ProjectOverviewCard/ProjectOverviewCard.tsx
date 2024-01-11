import { DARK_THEME } from "@/config";
import { ThemeContext } from "@/context";
import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export const ProjectOverviewCard = ({
  project: { createdAt, images, description, route, tags, name },
}: {
  project: ProjectType;
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      href={"projects/" + route}
      className={`flex gap-6 border-b pb-4 p-3 rounded-sm ${
        theme === DARK_THEME ? "hover:bg-zinc-950" : "hover:bg-zinc-200"
      }`}
    >
      <div className="flex flex-col justify-center  w-2/3 gap-4">
        <div className="flex flex-row gap-2 md:gap-3">
          {tags.map((tag) => tag.imgUrl)}
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{description}</p>
        <p className="text-sm text-gray-500 self-end ">
          Created at: {createdAt}
        </p>
      </div>
      <div className="w-1/3 flex items-center">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          width={450}
          height={640}
          className="w-full rounded-lg h-auto"
          priority
        />
      </div>
    </Link>
  );
};
