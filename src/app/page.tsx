import { buttonVariants } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <h1 className="text-6xl font-bold tracking-tighter">
        Learn. Use. Improve
      </h1>
      <p className="mb-8 mt-2 text-center text-xl text-muted">
        We offer top-notch content for easy learning, with clear visual <br />
        development principles.
      </p>
      <Link
        href={"/html/open-graphs"}
        className={buttonVariants({
          variant: "gradient",
          className: "!h-12 w-[152px]",
        })}
      >
        Start learning
      </Link>
    </div>
  );
}
