import Link from "next/link";
import { notFound } from "next/navigation";
import { Comment, Post, User } from "@/types/post";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  if (!res.ok) {
    throw new Error("Không thể tải thông tin tác giả");
  }
  return res.json();
}

async function getComments(postId: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  if (!res.ok) {
    throw new Error("Không thể tải bình luận của bài viết");
  }
  return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const postPromise = getPost(id);
  const commentsPromise = getComments(id);
  const authorPromise = postPromise.then((post) => getUser(post.userId));

  const [post, author, comments] = await Promise.all([
    postPromise,
    authorPromise,
    commentsPromise,
  ]);

  return (
    <div>
      <Link
        href="/blog"
        className="text-emerald-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>
      <article>
        <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>
        <div className="flex items-center gap-3 mb-6 text-sm text-gray-500">
          <span>
            Tác giả: <strong className="text-gray-700">{author.name}</strong>
          </span>
          <span>•</span>
          <span>{author.email}</span>
        </div>
        <div
          className="prose max-w-none text-gray-700 whitespace-pre-line mb-8
leading-relaxed"
        >
          {post.body}
        </div>
        <div className="border-t pt-6">
          <h3 className="font-semibold mb-2">Về tác giả</h3>
          <p className="text-gray-600 text-sm">
            <strong>{author.name}</strong> (@{author.username}) —
            {author.company.name}
          </p>
          <p className="text-gray-500 text-sm">{author.company.catchPhrase}</p>
        </div>

        <div className="border-t pt-6 mt-8">
          <h3 className="font-semibold mb-4">Bình luận ({comments.length})</h3>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-xl border border-zinc-200 bg-white p-4"
              >
                <p className="font-medium text-zinc-800 mb-1 capitalize">
                  {comment.name}
                </p>
                <p className="text-xs text-zinc-500 mb-2">{comment.email}</p>
                <p className="text-sm text-zinc-600 whitespace-pre-line">
                  {comment.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
