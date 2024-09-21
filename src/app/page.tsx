import { buttonVariants } from "@/components/Button";
import PhoneAnimation from "@/components/PhoneAnimation";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto grid h-dvh max-w-7xl items-center justify-center md:grid-cols-2">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-center text-6xl font-bold tracking-tighter md:text-left">
          Learn. Use. Improve
        </h1>
        <p className="mb-8 mt-2 text-center text-xl text-muted md:text-start">
          We offer top-notch content for easy learning, with clear visual <br />
          development principles.
        </p>
        <Link
          href={"/start"}
          className={buttonVariants({
            variant: "gradient",
            className: "!h-12 w-[152px]",
          })}
        >
          Start learning
        </Link>
      </div>

      <div className="hidden justify-center md:flex">
        <PhoneAnimation />
      </div>
    </main>
  );
}
