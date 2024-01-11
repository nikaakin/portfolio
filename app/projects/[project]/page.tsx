export default function ProjectPage({
  params,
}: {
  params: { project: string };
}) {
  return (
    <div>
      <h1>{params.project}</h1>
    </div>
  );
}
