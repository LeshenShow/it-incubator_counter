import { Error, ValueInfo } from "../../CounterApp";
import { Button } from "../../ui/button/Button";
import { Container } from "../../ui/container/Container";
import { ContainerElement } from "../../ui/containerElement/ContainerElement";
import { Panel } from "../../ui/panel/Panel";
import { SectionStyle } from "./SectionStyle";

type ResultSectionProps = {
  // children?: ReactNode;
  className: string;
  valueInfo: ValueInfo;
  error: Error;
  changeCurrentValue: () => void;
  resetCurrentValue: () => void;
};
export function ResultSection(props: ResultSectionProps) {
  const { valueInfo, changeCurrentValue, resetCurrentValue, error } = props;

  return (
    <SectionStyle>
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
        </Container>
      </Panel>
    </SectionStyle>
  );
}
