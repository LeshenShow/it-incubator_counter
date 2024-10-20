import styled, { css } from "styled-components";
export const SectionStyle = styled.div<{
  className?: string;
}>`
  color: rgba(105, 194, 228, 255);
  border: 3px solid lightblue;
  border-radius: 10px;
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* padding-bottom: 1%;
  padding-top: 1%; */

  /* &:last-child {
    justify-content: end;
  } */
  /* ${(props) => {
    switch (props.className) {
      case "infoSection":
        return css`
          align-items: center;
        `;
      case "actionSection":
        return css`
          align-items: flex-end;
          background-color: blue;
        `;
    }
  }}; */
`;
