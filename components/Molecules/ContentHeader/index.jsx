import React from "react";
import PropTypes from "prop-types";
import { theme } from "@/styles/emotionTheme.js";

import {
  Wrapper,
  ContainerButtonCategory,
  ContainerButtonBucket,
  WrapperSearch,
} from "@/components/Molecules/ContentHeader/style";

import AtomContainer from "@/components/Atoms/Container";
import AtomImage from "@/components/Atoms/Image";
import AtomButton from "@/components/Atoms/Button";
import AtomMainIcon from "@/components/Atoms/MainIcon";
import AtomInput from "@/components/Atoms/Input";

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
      <WrapperSearch>
        <AtomInput
          rightButton={{
            width: "36px",
            component: (
              <AtomButton
                component="div"
                height="100%"
                width="36px"
                margin="unset"
                backgroundColor={theme.colors.backgroundSecondary}
              >
                <AtomImage
                  src="/assets/icons/search.svg"
                  layout="intrinsic"
                  width={20}
                  height={20}
                />
              </AtomButton>
            ),
          }}
        />
      </WrapperSearch>
      <ContainerButtonBucket>
        <AtomButton
          component="div"
          borderRadius="4px"
          height="30px"
          width="36px"
          margin="unset"
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
