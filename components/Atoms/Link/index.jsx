import React from "react";
import PropTypes from "prop-types";

import { StyledLink } from "@/components/Atoms/Link/style";

function Link({
  text = "",
  href = "#",
  fontSize = 12,
  marginLeft = 0,
  marginRight = 0,
}) {
  return (
    <StyledLink
      href={href}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {text}
    </StyledLink>
  );
}

Link.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  fontSize: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
};

export default Link;
