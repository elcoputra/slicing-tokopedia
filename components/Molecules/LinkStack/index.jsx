import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Wrapper } from "@/components/Molecules/LinkStack/style";

import AtomLink from "@/components/Atoms/Link";

const linkDumy = [
  { text: "Menu 1", href: "#" },
  { text: "Menu 2", href: "#" },
  { text: "Menu 3", href: "#" },
  { text: "Menu 4", href: "#" },
  { text: "Menu 5", href: "#" },
];

function LinkStack({
  links = linkDumy,
  fontSize,
  direction = "row",
  marginLeftWrapper = "0px",
  marginRightWrapper = "0px",
  widthContainer = "unset",
  justifyContentContainer = "unset",
  space = 0,
}) {
  return (
    <Wrapper
      direction={direction}
      marginLeftWrapper={marginLeftWrapper}
      marginRightWrapper={marginRightWrapper}
      width={widthContainer}
      justifyContent={justifyContentContainer}
    >
      {links.map((item, index) => (
        <AtomLink
          key={index}
          text={item.text}
          href={item.href}
          fontSize={12}
          marginRight={index < links.length - 1 ? space : 0}
        />
      ))}
    </Wrapper>
  );
}

LinkStack.propTypes = {
  links: PropTypes.array,
  fontSize: PropTypes.number,
  direction: PropTypes.string,
  marginLeftWrapper: PropTypes.string,
  marginRightWrapper: PropTypes.string,
  space: PropTypes.number,
  widthContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  justifyContentContainer: PropTypes.string,
};

export default LinkStack;
