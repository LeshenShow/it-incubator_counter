import styled from "styled-components";
import { InfoSection } from "./components/section/InfoSection";
import { ResultSection } from "./components/section/ResultSection";
import { useEffect, useState } from "react";
import { UnionSection } from "./components/section/UnionSection";

type CounterAppProps = {};
export type ValueInfo = {
  maxValue: number;
  startValue: number;
  currentValue: number;
  isSet: boolean;
};
export type Error = {
  infoSection: string;
  resultSection: boolean;
};
export type ValueInfoKey = "maxValue" | "startValue" | "currentValue";

export function CounterApp(props: CounterAppProps) {
  const [valueInfo, setValueInfo] = useState<ValueInfo>({
    maxValue: 5,
    startValue: 2,
    currentValue: 0,
    isSet: false,
  });
  const [error, setError] = useState<Error>({
    infoSection: "",
    resultSection: false,
  });
  useEffect(() => {
    const maxValue = localStorage.getItem("maxValue");
    const startValue = localStorage.getItem("startValue");
    if (maxValue && startValue) {
      setValueInfo({
        ...valueInfo,
        maxValue: Number(JSON.parse(maxValue)),
        startValue: Number(JSON.parse(startValue)),
      });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "currentValue",
      JSON.stringify(valueInfo.currentValue)
    );
    localStorage.setItem("maxValue", JSON.stringify(valueInfo.maxValue));
    localStorage.setItem("startValue", JSON.stringify(valueInfo.startValue));
  }, [valueInfo]);

  const updateValueInfo = (key: ValueInfoKey, value: number) => {
    setValueInfo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const changeIsSetValue = (isSet: boolean) => {
    if (isSet !== valueInfo.isSet) {
      setValueInfo((prevState) => ({
        ...prevState,
        isSet,
        currentValue: valueInfo.startValue,
      }));
    }
    setError({ ...error, resultSection: false });
  };
  const changeMaxValue = (maxValue: number) => {
    const key = "maxValue";
    if (maxValue > valueInfo.startValue) {
      updateValueInfo(key, maxValue);
      changeIsSetValue(false);
      setError({ ...error, infoSection: "" });
    } else {
      setError({ ...error, infoSection: `${key}_error` });
    }
  };
  const changeStartValue = (startValue: number) => {
    const key = "startValue";
    if (valueInfo.maxValue > startValue && startValue >= 0) {
      updateValueInfo(key, startValue);
      changeIsSetValue(false);
      setError({ ...error, infoSection: "" });
    } else {
      setError({ ...error, infoSection: `${key}_error` });
    }
  };
  const changeCurrentValue = () => {
    const key = "currentValue";
    if (valueInfo.maxValue >= valueInfo.currentValue + 1) {
      setError({ ...error, resultSection: false });
      updateValueInfo(key, valueInfo.currentValue + 1);
    } else {
      setError({ ...error, resultSection: true });
    }
  };
  const resetCurrentValue = () => {
    const key = "currentValue";
    setError({ ...error, resultSection: false });
    updateValueInfo(key, valueInfo.startValue);
  };

  return (
    <CounterStyle>
      <InfoSection
        className={"infoSection"}
        valueInfo={valueInfo}
        changeStartValue={changeStartValue}
        changeMaxValue={changeMaxValue}
        changeIsSetValue={changeIsSetValue}
        error={error}
        setError={setError}
      />
      <ResultSection
        className={"resultSection"}
        valueInfo={valueInfo}
        changeCurrentValue={changeCurrentValue}
        resetCurrentValue={resetCurrentValue}
        error={error}
      />
      <UnionSection
        className={"UnionSection"}
        valueInfo={valueInfo}
        changeStartValue={changeStartValue}
        changeMaxValue={changeMaxValue}
        changeIsSetValue={changeIsSetValue}
        error={error}
        setError={setError}
        changeCurrentValue={changeCurrentValue}
        resetCurrentValue={resetCurrentValue}
      />
    </CounterStyle>
  );
}

export const CounterStyle = styled.div`
  color: black;
  background-color: rgba(41, 44, 53, 255);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
