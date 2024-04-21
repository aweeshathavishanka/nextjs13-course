"use client";

import { useParams } from "next/navigation";

const PostPage = () => {
  const params = useParams();
  console.log(params.id);
  return <div>Post Page</div>;
};

export default PostPage;
