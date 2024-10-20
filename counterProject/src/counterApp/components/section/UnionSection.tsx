import { ReactNode } from "react";
import { Error, ValueInfo } from "../../CounterApp";
import { SectionStyle } from "./SectionStyle";
import { Panel } from "../../ui/panel/Panel";
import { Container } from "../../ui/container/Container";
import { ContainerElement } from "../../ui/containerElement/ContainerElement";
import { Button } from "../../ui/button/Button";
import { Input } from "../../ui/input/Input";

type UnionSectionProps = {
  children?: ReactNode;
  className: string;
  valueInfo: ValueInfo;
  error: Error;
  changeCurrentValue: () => void;
  resetCurrentValue: () => void;
  changeStartValue: (value: number) => void;
  changeMaxValue: (value: number) => void;
  changeIsSetValue: (isSet: boolean) => void;
  setError: (error: Error) => void;
};
export function UnionSection(props: UnionSectionProps) {
  const {
    valueInfo,
    error,
    changeStartValue,
    changeMaxValue,
    changeIsSetValue,
    resetCurrentValue,
    changeCurrentValue,
    setError,
  } = props;
  return (
    <SectionStyle>
      {valueInfo.isSet ? (
        <>
          <Panel className="resultPanel">
            <Container className="resultPanel">
              <ContainerElement className="resultPanel" isSet={valueInfo.isSet}>
                <span className={error.resultSection ? "error" : ""}>
                  {error.infoSection
                    ? "Incorrect value"
                    : valueInfo.isSet
                    ? valueInfo.currentValue
                    : "Not set"}
                </span>
              </ContainerElement>
            </Container>
          </Panel>
          <Panel className="actionPanel">
            <Container className="actionPanel">
              <Button
                onClick={changeCurrentValue}
                disabled={error.resultSection || !valueInfo.isSet}
              >
                <span>inc</span>
              </Button>
              <Button onClick={resetCurrentValue} disabled={!valueInfo.isSet}>
                <span>reset</span>
              </Button>
              <Button
                onClick={() => {
                  changeIsSetValue(false);
                }}
              >
                <span>set</span>
              </Button>
            </Container>
          </Panel>
        </>
      ) : (
        <>
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
                    error.infoSection.includes("startValue_error")
                      ? "error"
                      : ""
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
        </>
      )}
    </SectionStyle>
  );
}
