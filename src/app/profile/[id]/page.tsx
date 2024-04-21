"use client";

import { useParams } from "next/navigation";

export default function Profile() {
  const params = useParams();
  console.log(params);

  return <div>My id profile Page</div>;
}
