"use client";

import { useParams } from "next/navigation";

const ProfileIDPostPage = () => {
  const params = useParams();
  console.log(params.id);
  console.log(params.id, params.postID);
  return <div>ProfileIDPostPage</div>;
};

export default ProfileIDPostPage;
