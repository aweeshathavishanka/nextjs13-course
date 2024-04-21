"use client";

import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();

  console.log(router);
  return (
    <div>
      <h1>my list of profiles</h1>
      <div>
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
    </div>
  );
};

export default ProfilePage;
