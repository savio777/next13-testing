import { Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Repos from "./components/Repos";
import User from "./components/User";
import Cookies from "./components/Cookies";
import ForceLoading from "./components/ForceLoading";
import Client from "./components/Client";

export const metadata = {
  title: { default: "title :)", template: "%s | test title" },
};

export default function Home() {
  // forçar refresh sempre q carregar a pagina
  /*
  const router = useRouter();

  router.refresh();
  */

  return (
    <main>
      <h1>teste</h1>

      <Link href="/about">ir para about</Link>
      <br />

      <Link href="/users/savio777">user test</Link>

      <ForceLoading ms={2000} />
      <Suspense
        fallback={
          <div>
            <h2>carregando test suspense</h2>
          </div>
        }
      >
        <ForceLoading ms={5000} />
      </Suspense>

      <Client />
      <Cookies />
      <User />
      <Repos />
    </main>
  );
}
