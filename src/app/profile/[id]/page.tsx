"use client";

import { useParams, useRouter } from "next/navigation";

export default function Profile() {
  const params = useParams();
  const router = useRouter();

  return (
    <div className=" items-center text-center py-10">
      <h1>Profile Page id: {params.id}</h1>
      <div className=" py-4">
        <button
          onClick={() => router.push("/profile")}
          className=" py-2 px-4 bg-blue-500">
          Back Profile
        </button>
      </div>
    </div>
  );
}
