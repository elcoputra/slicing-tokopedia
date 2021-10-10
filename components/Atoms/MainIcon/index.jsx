import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Icon } from "@/components/Atoms/MainIcon/style";

function MainIcon({
  icon = "bucket",
  size = "sm",
  marginRight = 0,
  testId = "",
}) {
  const [iconSize, setIconSize] = useState({ width: 20, height: 20 });
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    switch (size) {
      case "sm":
        setIconSize({ width: 20, height: 20 });
        break;
      case "md":
        setIconSize({ width: 35, height: 35 });
        break;
      case "lg":
        setIconSize({ width: 60, height: 60 });
        break;
      case "xl":
        setIconSize({ width: 100, height: 100 });
        break;
      default:
        setIconSize({ width: size.x || 20, height: size.y || 20 });
        break;
    }
  }, [size]);

  useEffect(() => {
    switch (icon) {
      case "bucket":
        setIconPosition({ x: 0, y: 0 });
        break;
      case "mail":
        setIconPosition({ x: 20, y: 20 });
        break;
      case "bel":
        setIconPosition({ x: 40, y: 40 });
        break;
      case "phone":
        setIconPosition({ x: 60, y: 60 });
        break;
      case "gear":
        setIconPosition({ x: 80, y: 80 });
        break;
      case "arrowDown":
        setIconPosition({ x: 100, y: 100 });
        break;
      default:
        setIconPosition({ x: 0, y: 0 });
        break;
    }
  }, [icon]);

  return (
    <Icon
      data-testid={"MainIcon-" + icon + "-" + size}
      imageUrl="/assets/icons/main-1.svg"
      iconSize={iconSize}
      iconPosition={iconPosition}
      marginRight={marginRight}
    />
  );
}

MainIcon.propTypes = {
  icon: PropTypes.oneOf([
    "bucket",
    "mail",
    "bel",
    "phone",
    "gear",
    "arrowDown",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    { x: PropTypes.number, y: PropTypes.number },
  ]),
  marginRight: PropTypes.number,
  testId: PropTypes.string,
};

export default MainIcon;
