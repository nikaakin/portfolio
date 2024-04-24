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
      className={`w-full flex flex-col md:flex-row  gap-6 border-b pb-4 p-3 rounded-sm transition-colors ${
        theme === DARK_THEME ? "hover:bg-zinc-950" : "hover:bg-zinc-200"
      }`}
    >
      <div className="flex flex-col justify-center w-full md:w-2/3 gap-4">
        <div className="flex flex-row  gap-2 md:gap-3">
          {tags.map((tag) => tag.imgUrl)}
        </div>
        <h3 className="text-xl font-bold uppercase">{name}</h3>
        <p>{description}</p>
        <p className="text-sm text-gray-500 self-end ">
          Created at: {createdAt}
        </p>
      </div>
      <div className="w-full flex items-center md:w-1/3">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          width={
            window.innerWidth > 756 ? 310 : window.innerWidth > 480 ? 500 : 270
          }
          height={
            window.innerWidth > 756 ? 170 : window.innerWidth > 480 ? 280 : 160
          }
          className="w-full rounded-lg h-auto"
          priority
        />
      </div>
    </Link>
  );
};
