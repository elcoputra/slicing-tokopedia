import Head from "next/head";
import Image from "next/image";

import AtomImage from "@/components/Atoms/Image";

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
      <TemplateHome
        Header={(show = true) => <OrganismHeader />}
        FloatingImage={(show = true) => (
          <AtomImage
            withContainer
            imagePath="/assets/images/floating-icon6.gif"
            zIndex={50}
            size="sm"
            floating={{ position: "rb" }}
            alt="float-image-kotak-hadiah"
            href="/"
          />
        )}
      />
    </>
  );
}
