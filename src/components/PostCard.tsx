"use client";

import { getPosts } from "@/actions/post.action";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number];

const PostCard = ({
  post,
  dbUserId,
}: {
  post: Post;
  dbUserId: string | null;
}) => {
  const { user } = useUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState(post._count.likes);

  return (
    <div className="bg-background rounded-lg p-4">
      <div className="flex items-center gap-2"></div>
    </div>
  );
};

export default PostCard;
