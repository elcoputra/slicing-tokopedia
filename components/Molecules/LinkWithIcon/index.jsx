import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "@/components/Molecules/LinkWithIcon/style";

import AtomLink from "@/components/Atoms/Link";
import AtomMainIcon from "@/components/Atoms/MainIcon/index";

function LinkWithMainIcon({ text, icon, space, iconSize, maxWidth = "none" }) {
  return (
    <Wrapper maxWidth={maxWidth}>
      <AtomMainIcon icon={icon} size={iconSize} marginRight={space} />
      <AtomLink text={text} />
    </Wrapper>
  );
}

LinkWithMainIcon.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  space: PropTypes.number,
  iconSize: PropTypes.string,
  maxWidth: PropTypes.oneOf([PropTypes.number, "none"]),
};

export default LinkWithMainIcon;
