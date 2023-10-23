import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>teste</h1>

      <Link href="/about">ir para about</Link>
      <br />

      <Link href="/posts/123">post test</Link>
    </main>
  );
}
