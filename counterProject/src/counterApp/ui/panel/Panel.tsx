import { ReactNode } from "react";
import styled, { css } from "styled-components";
type PanelProps = {
  children?: ReactNode;
  className: string;
};
export function Panel(props: PanelProps) {
  return <PanelStyle className={props.className}>{props.children}</PanelStyle>;
}

export const PanelStyle = styled.div<{
  className?: string;
}>`
  border: 1px dashed lightblue;
  border-radius: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => {
    switch (props.className) {
      case "infoPanel":
      case "resultPanel":
        return css`
          height: 65%;
        `;
      case "actionPanel":
        return css`
          height: 20%;
        `;
    }
  }};
`;
