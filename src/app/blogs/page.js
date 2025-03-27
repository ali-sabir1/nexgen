import FirstDiv from "../components/FirstDiv";

export default function Blogs() {
  return (
    <main>
      <div className="pt-20 bg-[#051d40]">
        <div className="relative bg-[url('/images/blogs.webp')] bg-cover bg-center h-[100vw] lg:h-[36vw] w-full flex justify-center text-white">
          <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
          <div className="relative z-10">
            <FirstDiv word1="Blogs" />
          </div>
        </div>
      </div>
    </main>
  );
}
