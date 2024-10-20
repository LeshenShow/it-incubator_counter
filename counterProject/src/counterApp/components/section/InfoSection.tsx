import { ReactNode } from "react";
import { Panel } from "../../ui/panel/Panel";
import { SectionStyle } from "./SectionStyle";
import { ContainerElement } from "../../ui/containerElement/ContainerElement";
import { Container } from "../../ui/container/Container";
import { Input } from "../../ui/input/Input";
import { Error, ValueInfo } from "../../CounterApp";
import { Button } from "../../ui/button/Button";

type InfoSectionProps = {
  children?: ReactNode;
  className: string;
  valueInfo: ValueInfo;
  changeStartValue: (value: number) => void;
  changeMaxValue: (value: number) => void;
  changeIsSetValue: (isSet: boolean) => void;
  error: Error;
  setError: (error: Error) => void;
};
export function InfoSection(props: InfoSectionProps) {
  const {
    className,
    valueInfo,
    changeStartValue,
    changeMaxValue,
    changeIsSetValue,
    error,
    setError,
  } = props;

  return (
    <SectionStyle className={className} color={"black"}>
      <Panel className="infoPanel">
        <Container className="infoPanel">
          <ContainerElement className="infoPanel">
            <span>Max value: </span>
            <Input
              type={"number"}
              value={valueInfo.maxValue}
              onChange={changeMaxValue}
              className={
                error.infoSection.includes("maxValue_error") ? "error" : ""
              }
              onBlur={() => {
                setError({ ...error, infoSection: "" });
              }}
            />
          </ContainerElement>
          <ContainerElement>
            <span>Start value: </span>
            <Input
              type={"number"}
              value={valueInfo.startValue}
              onChange={changeStartValue}
              className={
                error.infoSection.includes("startValue_error") ? "error" : ""
              }
              onBlur={() => {
                setError({ ...error, infoSection: "" });
              }}
            />
          </ContainerElement>
        </Container>
      </Panel>
      <Panel className="actionPanel">
        <Container className="actionPanel">
          <Button
            onClick={() => {
              changeIsSetValue(true);
            }}
          >
            <span>set</span>
          </Button>
        </Container>
      </Panel>
    </SectionStyle>
  );
}
