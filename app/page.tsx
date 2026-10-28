// standard
import Image from "next/image";

// local
import { envConfig } from "@/env.config";

export default function Home() {
  return (
    <main>
      <h1>Hello Word!</h1>
      <Image
        src={`${envConfig.pagesBasePath}/images/hello.png`}
        alt="Logo del proyecto"
        width={200}
        height={200}
      />

    </main>
  );
}
