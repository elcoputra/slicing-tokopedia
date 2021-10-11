import React from "react";
import PropTypes from "prop-types";

import { StyledMain } from "@/components/Templates/Home/style";

import AtomContainer from "@/components/Atoms/Container";

function HomeTemplate({
  Header,
  FloatingImage,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
  SectionSeven,
  SectionEight,
  SectionNine,
  SectionTen,
  SectionEleven,
  SectionTwelve,
  SectionThirteen,
  SectionFourteen,
  Footer,
}) {
  return (
    <>
      {Header && <Header />}
      <StyledMain>
        {FloatingImage && <FloatingImage />}
        <AtomContainer maxWidth={75.4}>
          <>
            {SectionOne && (
              <section id="section-1">
                <SectionOne />
              </section>
            )}
            {SectionTwo && (
              <section id="section-2">
                <SectionTwo />
              </section>
            )}
            {SectionThree && (
              <section id="section-3">
                <SectionThree />
              </section>
            )}
            {SectionFour && (
              <section id="section-4">
                <SectionFour />
              </section>
            )}
            {SectionFive && (
              <section id="section-5">
                <SectionFive />
              </section>
            )}
            {SectionSix && (
              <section id="section-6">
                <SectionSix />
              </section>
            )}
            {SectionSeven && (
              <section id="section-7">
                <SectionSeven />
              </section>
            )}
            {SectionEight && (
              <section id="section-8">
                <SectionEight />
              </section>
            )}
            {SectionNine && (
              <section id="section-9">
                <SectionNine />
              </section>
            )}
            {SectionTen && (
              <section id="section-10">
                <SectionTen />
              </section>
            )}
            {SectionEleven && (
              <section id="section-11">
                <SectionEleven />
              </section>
            )}
            {SectionTwelve && (
              <section id="section-12">
                <SectionTwelve />
              </section>
            )}
            {SectionThirteen && (
              <section id="section-13">
                <SectionThirteen />
              </section>
            )}
            {SectionFourteen && (
              <section id="section-14">
                <SectionFourteen />
              </section>
            )}
          </>
        </AtomContainer>
      </StyledMain>
      {Footer && <Footer />}
    </>
  );
}

HomeTemplate.propTypes = {
  Header: PropTypes.func,
  FloatingImage: PropTypes.func,
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
