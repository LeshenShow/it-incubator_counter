import { ChangeEvent } from "react";
import styled from "styled-components";

export const InputStyle = styled.input``;
type InputProps = {
  type: string;
  value: number;
  className?: string;
  onChange: (value: number) => void;
  onBlur?: () => void;
};
export function Input(props: InputProps) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(Number(e.currentTarget.value));
  };
  const onBlurHandler = () => {
    props.onBlur && props.onBlur();
  };
  return (
    <input
      placeholder={props.value.toString()}
      type={props.type}
      value={props.value}
      onChange={onChangeHandler}
      className={props.className}
      onBlur={onBlurHandler}
    />
  );
}
