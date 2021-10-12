import React from "react";
import PropTypes from "prop-types";

import { HeaderWrapper } from "@/components/Organisms/Header/style";

import AtomContainer from "@/components/Atoms/Container";

import MoleculeAdditionalLinkHeader from "@/components/Molecules/AdditionalLinkHeader";
import MoleculeContentHeader from "@/components/Molecules/ContentHeader";

function Header() {
  return (
    <HeaderWrapper>
      <AtomContainer maxWidth="none" direction="column" height="100%">
        <MoleculeAdditionalLinkHeader
          space={4}
          icon="phone"
          size="sm"
          textLink="Download Tokopedia App"
          position="fixed"
        />
        <MoleculeContentHeader directionWrapper="row" />
      </AtomContainer>
    </HeaderWrapper>
  );
}

Header.propTypes = {};

export default Header;
