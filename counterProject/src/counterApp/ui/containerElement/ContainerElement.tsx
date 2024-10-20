import { ReactNode } from "react";
import styled from "styled-components";

type ContainerElementProps = {
  children?: ReactNode;
  className?: string;
  isSet?: boolean;
};
export function ContainerElement(props: ContainerElementProps) {
  return (
    <ContainerElementStyle className={props.className} isSet={props.isSet}>
      {props.children}
    </ContainerElementStyle>
  );
}
// const {} = props;
export const ContainerElementStyle = styled.div<{
  className?: string;
  isSet?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  & span,
  & input {
    width: 40%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    font-size: 20px;
  }
  & input {
    border-radius: 10px;
    font-weight: 800;
    border: none;
  }
  & input {
    text-align: center;
    background-color: rgba(105, 194, 228, 255);
  }
  &.resultPanel {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.resultPanel > span {
    color: ${(props) => (props.isSet ? "rgba(105, 194, 228, 255)" : "red")};
    font-size: ${(props) => (props.isSet ? "80px" : "20px")};
  }
  & > .error {
    color: darkred;
    border: 1px solid red;
    background-color: rgba(105, 194, 228, 0.8);
  }
  &.resultPanel > span.error {
    color: darkred;
    border: none;
    background-color: rgba(41, 44, 53, 255);
  }
`;
