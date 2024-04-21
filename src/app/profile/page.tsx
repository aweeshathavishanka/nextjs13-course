"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();

  console.log(router);
  return (
    <div>
      <h1>my list of profiles</h1>
      <div className=" m-10">
        <ul>
          <li
            onClick={() => router.push("profile/1")}
            className=" cursor-pointer">
            Profile 01
          </li>
          <li
            onClick={() => router.push("profile/2")}
            className=" cursor-pointer">
            Profile 02
          </li>
          <li
            onClick={() => router.push("profile/3")}
            className=" cursor-pointer">
            Profile 03
          </li>
        </ul>
      </div>

      <div className=" py-10 m-10">
        <h1>Link tag Navigation</h1>
        <ul className="">
          <li className=" py-4">
            <Link
              href="/profile/1"
              className=" bg-blue-500 px-4 py-2 border-slate-200">
              Profile 1
            </Link>
          </li>
          <li className=" py-4">
            <Link
              href="/profile/2"
              className=" px-4 py-2 bg-blur bg-blue-500 border-slate-200">
              Profile 2
            </Link>
          </li>
          <li className=" py-4">
            <Link
              href={{
                pathname: "/profile/3",
                query: { username: "John Doe" },
              }}
              className=" px-4 py-2 bg-blur bg-blue-500 border-slate-200">
              Profile 3
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
