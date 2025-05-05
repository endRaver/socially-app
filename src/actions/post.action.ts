"use server";

import { prisma } from "@/lib/prima";
import { getDbUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, imageUrl: string) {
  try {
    const userId = await getDbUserId();

    const post = await prisma.post.create({
      data: {
        content,
        image: imageUrl,
        authorId: userId,
      },
    });

    revalidatePath("/"); // Purge the cache for the home page
    return { success: true, message: "Post created successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to create post" };
  }
}
