import { ReactNode } from "react";
import styled from "styled-components";
import { css } from "styled-components";

type ContainerProps = {
  children?: ReactNode;
  className?: "infoPanel" | "actionPanel" | "resultPanel";
};
export function Container(props: ContainerProps) {
  return (
    <ContainerStyle className={props.className}>
      {props.children}
    </ContainerStyle>
  );
}

export const ContainerStyle = styled.div<{
  className?: string;
}>`
  /* border: 1px solid red; */
  border-radius: 5%;
  height: 95%;
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${(props) => {
    switch (props.className) {
      case "infoPanel":
      case "resultPanel":
        return css`
          flex-direction: column;
        `;
      case "actionPanel":
        return css`
          flex-direction: row;
        `;
    }
  }};
  /* flex-direction: ${(props) =>
    props.className === "infoPanel" ? "column" : "row"}; */
`;
