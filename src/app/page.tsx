"use client";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className=" text-center">
        <Header />
      </div>
      <div className=" items-center justify-center text-center py-10">
        <h1 className=" text-3xl">Main Page</h1>
        <div className=" py-10">
          <button
            onClick={() => router.push("/profile")}
            className=" text-white bg-blue-500 rounded-sm py-2 px-4">
            Profile
          </button>
        </div>
      </div>
    </main>
  );
}
