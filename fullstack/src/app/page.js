import Image from "next/image";

const getData = async () => {

  const res = await fetch("http://localhost:3000/api/blog/posts");

  const posts = await res.json();
  return posts;
}

export const metadata = {
  title: "Blog Posts",
  description: ""
}

export default async function Home() {
  const all = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hii
      <div>
      {
        all.data.map( (p, i) => (
          <p>{p.title}</p>
        ))
      }
      </div>
    </main>
  );
}
