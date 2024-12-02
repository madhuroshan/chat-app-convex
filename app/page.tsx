import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blend-darken p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Sup Bro!!
        </h1>
        <p>
          Its not a whatsapp clone, its a whatsapp clone clone. I'm just kidding
        </p>
        <Button
          asChild
          size={"lg"}
          className="bg-white text-cyan-400 hover:bg-gray-200 dark:bg-zinc-700 dark:text-cyan-500"
        >
          <Link href="/chat" className="text-lg font-semibold">
            Get Started
          </Link>
        </Button>
      </div>
    </main>
  );
}
