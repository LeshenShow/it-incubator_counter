import { ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children?: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  onBlur?: () => void;
};
export function Button(props: ButtonProps) {
  // const onBlurHandler = () => {
  //   props.onBlur && props.onBlur();
  // };
  return (
    <ButtonStyle
      onClick={props.onClick}
      disabled={props.disabled}
      // onBlur={onBlurHandler}
    >
      {props.children}
    </ButtonStyle>
  );
}
export const ButtonStyle = styled.button`
  height: 90%;
  width: 25%;
  background-color: rgba(105, 194, 228, 255);
  border-radius: 5%;
  border: none;
  color: rgba(41, 44, 53, 255);
  font-size: 18px;
  padding: 0;
  &:disabled {
    /* color: darkred; */
    background-color: rgba(105, 194, 228, 0.5);
  }
`;
