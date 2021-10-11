import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  ContainerButtonCategory,
  ContainerButtonBucket,
} from "@/components/Molecules/ContentHeader/style";

import AtomContainer from "@/components/Atoms/Container";
import AtomImage from "@/components/Atoms/Image";
import AtomButton from "@/components/Atoms/Button";
import AtomMainIcon from "@/components/Atoms/MainIcon/index";

function ContentHeader({ directionWrapper = "unset" }) {
  return (
    <Wrapper direction={directionWrapper}>
      <AtomImage
        position="relative"
        withContainer
        alt="logo-toclone-text"
        imagePath="/assets/icons/logo-text-clone.png"
        size={{ x: 145, y: 32 }}
        href="/"
      />
      <ContainerButtonCategory>
        <AtomButton
          component="div"
          borderRadius="4px"
          height="30px"
          width="58px"
        >
          Kategori
        </AtomButton>
      </ContainerButtonCategory>
      <ContainerButtonBucket>
        <AtomButton
          component="div"
          borderRadius="4px"
          height="30px"
          width="36px"
        >
          <AtomMainIcon icon="bucket" size="sm" />
        </AtomButton>
      </ContainerButtonBucket>
    </Wrapper>
  );
}

ContentHeader.propTypes = {
  directionWrapper: PropTypes.string,
  direction: PropTypes.string,
};

export default ContentHeader;
