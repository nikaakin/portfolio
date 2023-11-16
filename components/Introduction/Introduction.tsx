import Image from "next/image";

export const Introduction = () => {
  return (
    <div>
      <div className="mb-12">
        <Image alt="avatar" src="/avatar.png" width={64} height={64} />
      </div>

      <div className="flex">
        <div>
          <h2 className="text-3xl font-bold">
            Full-stack web and mobile app developer.
          </h2>
          <p>
            I am a full-stack developer with expertise in React.js and Laravel.
            I have experience in building scalable web applications using
            various frameworks and technologies. I enjoy solving complex
            problems and learning new skills. I am passionate about creating
            high-quality code that follows best practices and industry
            standards. I am always looking for new challenges and opportunities
            to grow as a developer.
          </p>
        </div>
        <div>
          <Image src="" alt="" />
        </div>
      </div>
      <div>
        <a href=""></a>
      </div>
    </div>
  );
};
