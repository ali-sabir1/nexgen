import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-[#051d40] text-center pt-60 pb-28">
      <h2 className="text-2xl md:text-4xl lg:text-4xl font-semibold py-5">
        There was a problem.
      </h2>
      <p className="text-md md:text-2xl lg:text-2xl">
        We could not find the page you were looking for.
      </p>
      <p className="font-medium text-md md:text-2xl lg:text-2xl pt-2">
        Go back to the{" "}
        <Link href="/" className="text-[#38b6ff] font-semibold">
          Home Page
        </Link>
      </p>
    </main>
  );
}
