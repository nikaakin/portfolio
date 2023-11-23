import {
  DynamicHeader,
  Introduction,
  PersonalLinks,
  ProjectsOnHome,
} from "@/components";

export default function Home() {
  return (
    <main>
      <DynamicHeader />
      <Introduction />
      <PersonalLinks />
      <ProjectsOnHome theme="black" />
    </main>
  );
}
