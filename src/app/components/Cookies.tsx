import { cookies, headers } from "next/headers";

export default async function Cookies() {
  return (
    <div>
      <h1>Cookies</h1>
      <p>{JSON.stringify(cookies().getAll())}</p>
      <p>{JSON.stringify(headers().entries())}</p>
    </div>
  );
}
