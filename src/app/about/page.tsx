import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>teste about</h1>

      <Link href="../">voltar</Link>
      <br />
      <Link href="/">começo</Link>
      <br />
      <Link href="/auth/login">login</Link>
      <br />
      <Link href="/logged/home">home</Link>
      <br />
      <Link href="/test">test</Link>
      <br />
    </div>
  );
}
