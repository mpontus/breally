import type { NextPage } from "next";
import Nav from "react-bootstrap/Nav";
import { Hero } from "../lib/components/Hero";
import { Layout } from "../lib/components/Layout";
import { Newsletter } from "../lib/components/Newsletter";
import { Testimonial } from "../lib/components/Testimonial";

const Home: NextPage = () => {
  return (
    <Layout
      nav={
        <>
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">Solutions</Nav.Link>
          <Nav.Link href="#">Resources</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </>
      }
    >
      <Hero
        text={
          <>
            Torquatos nostros? quos dolores eos, qui studiose antiqua
            persequeris, claris et quasi naturalem. In quo enim inter mediocrem
            animadversionem atque insitam in malis dolor, non numquam. At vero
            eos et dolore suo sanciret.
          </>
        }
        image="https://i.ibb.co/G9bfTPH/breally-img.png"
      />
      <Testimonial
        text={
          <>
            Torquatos nostros? quos dolores eos, qui studiose antiqua
            persequeris, claris et quasi naturalem. In quo enim inter mediocrem
            animadversionem atque insitam in malis dolor, non numquam. At vero
            eos et dolore suo sanciret.
          </>
        }
        author="John Doe, Street Artist"
      />
      <Newsletter />
    </Layout>
  );
};

export default Home;
