import React from "react";
import PropTypes from "prop-types";

import AtomContainer from "@/components/Atoms/Container";

function HomeTemplate({
  Header = () => <></>,
  SectionOne = () => <></>,
  SectionTwo = () => <></>,
  SectionThree = () => <></>,
  SectionFour = () => <></>,
  SectionFive = () => <></>,
  SectionSix = () => <></>,
  SectionSeven = () => <></>,
  SectionEight = () => <></>,
  SectionNine = () => <></>,
  SectionTen = () => <></>,
  SectionEleven = () => <></>,
  SectionTwelve = () => <></>,
  SectionThirteen = () => <></>,
  SectionFourteen = () => <></>,
  Footer = () => <></>,
}) {
  return (
    <>
      <Header />
      <main>
        <AtomContainer maxWidth={73}>
          <>
            <section id="section-1">
              <SectionOne />
            </section>
            <section id="section-2">
              <SectionTwo />
            </section>
            <section id="section-3">
              <SectionThree />
            </section>
            <section id="section-4">
              <SectionFour />
            </section>
            <section id="section-5">
              <SectionFive />
            </section>
            <section id="section-6">
              <SectionSix />
            </section>
            <section id="section-7">
              <SectionSeven />
            </section>
            <section id="section-8">
              <SectionEight />
            </section>
            <section id="section-9">
              <SectionNine />
            </section>
            <section id="section-10">
              <SectionTen />
            </section>
            <section id="section-11">
              <SectionEleven />
            </section>
            <section id="section-12">
              <SectionTwelve />
            </section>
            <section id="section-13">
              <SectionThirteen />
            </section>
            <section id="section-14">
              <SectionFourteen />
            </section>
          </>
        </AtomContainer>
      </main>
      <Footer />
    </>
  );
}

HomeTemplate.propTypes = {
  Header: PropTypes.func,
  SectionOne: PropTypes.func,
  SectionTwo: PropTypes.func,
  SectionThree: PropTypes.func,
  SectionFour: PropTypes.func,
  SectionFive: PropTypes.func,
  SectionSix: PropTypes.func,
  SectionSeven: PropTypes.func,
  SectionEight: PropTypes.func,
  SectionNine: PropTypes.func,
  SectionTen: PropTypes.func,
  SectionEleven: PropTypes.func,
  SectionTwelve: PropTypes.func,
  SectionThirteen: PropTypes.func,
  SectionFourteen: PropTypes.func,
  Footer: PropTypes.func,
};

export default HomeTemplate;
