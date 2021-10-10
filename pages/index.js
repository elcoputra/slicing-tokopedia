import Head from "next/head";
import Image from "next/image";

import OrganismHeader from "@/components/Organisms/Header";

import TemplateHome from "@/components/Templates/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Situs Jual Beli Online Terlengkap, Mudah & Aman | TokopediaClone
        </title>
        <meta
          name="description"
          content="Tokopedia Clone merupakan Clone dari Web APP Tokopedia"
        />
      </Head>
      <TemplateHome Header={(show = true) => <OrganismHeader />} />
    </>
  );
}
