import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "@/components/Molecules/AdditionalLinkHeader/style";

import AtomContainer from "@/components/Atoms/Container";

import MoleculesLinkWithIcon from "@/components/Molecules/LinkWithIcon";
import MoleculeLinkStack from "@/components/Molecules/LinkStack";

function AdditionalLinkHeader({
  textLink,
  space,
  icon,
  iconSize,
  direction = "row",
  position = "relative",
}) {
  return (
    <Wrapper position={position}>
      <AtomContainer maxWidth="none" direction={direction}>
        <>
          <MoleculesLinkWithIcon
            icon={icon}
            text={textLink}
            space={space}
            iconSize={iconSize}
          />
          <MoleculeLinkStack
            links={links}
            marginLeftWrapper="auto"
            widthContainer={533}
            justifyContentContainer="space-around"
          />
        </>
      </AtomContainer>
    </Wrapper>
  );
}

const links = [
  { text: "Tentang Tokopedia", href: "#" },
  { text: "Mitra Tokopedia", href: "#" },
  { text: "Mulai Berjualan", href: "#" },
  { text: "Promo", href: "#" },
  { text: "Tokopedia Care", href: "#" },
];

AdditionalLinkHeader.propTypes = {
  textLink: PropTypes.string,
  space: PropTypes.number,
  icon: PropTypes.string,
  iconSize: PropTypes.string,
  direction: PropTypes.string,
  position: PropTypes.string,
};

export default AdditionalLinkHeader;
