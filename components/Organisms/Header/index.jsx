import React from "react";
import PropTypes from "prop-types";

import { HeaderWrapper } from "@/components/Organisms/Header/style";

import AtomContainer from "@/components/Atoms/Container";

import MoleculeAdditionalLinkHeader from "@/components/Molecules/AdditionalLinkHeader";

function Header() {
  return (
    <HeaderWrapper>
      <AtomContainer maxWidth="none">
        <MoleculeAdditionalLinkHeader
          space={4}
          icon="phone"
          size="sm"
          textLink="Download Tokopedia App"
        />
      </AtomContainer>
    </HeaderWrapper>
  );
}

Header.propTypes = {};

export default Header;
