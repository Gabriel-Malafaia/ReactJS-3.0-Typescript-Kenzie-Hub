import React from "react";
import { Text } from "../../../../../styles/TypograpyText";
import { ContentContainerStyle } from "./style";

type iContentContainer = {
  children: React.ReactNode
}

export const ContentContainer = ({ children }: iContentContainer) => {
  return (
    <ContentContainerStyle>
      {Array.isArray(children) && children.length ?  (
        children
      ) : (
        <Text tag="h2" fontSize="title2">
          Nenhuma tecnologia cadastrada...
        </Text>
      )}
    </ContentContainerStyle>
  );
};
