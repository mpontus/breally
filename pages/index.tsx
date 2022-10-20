import type { GetStaticProps, NextPage } from "next";
import { Hero } from "../lib/components/Hero";
import { Newsletter } from "../lib/components/Newsletter";
import { Testimonial } from "../lib/components/Testimonial";
import { api, AppProps } from "./_app";

type Section =
  | { type: "hero"; text: string; img: string }
  | { type: "testimonial"; text: string; author: string }
  | { type: "newsletter" };

export interface PageProps extends AppProps {
  sections: Array<Section>;
}

const Home: NextPage<PageProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, i) => {
        switch (section.type) {
          case "hero":
            return <Hero key={i} text={section.text} image={section.img} />;

          case "testimonial":
            return (
              <Testimonial
                key={i}
                text={section.text}
                author={section.author}
              />
            );

          case "newsletter":
            return <Newsletter key={i} />;

          default:
            return undefined;
        }
      })}
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const pages = await api.getPages();
  const home = pages.find((page) => page.url === "/");

  if (home !== undefined) {
    const { sections } = await api.getPage(home.id);
    return { props: { pages, sections } };
  }

  return {
    // Unable to determine home page contents
    props: { pages, sections: [] },
  };
};

export default Home;
