import React from "react";
import { Text, View } from "react-native";
import { HelloWorldScreen } from "./src/screen/helloWorld";
import { BasicCounterScreen } from "./src/screen/basic-counter";

export default function App() {
  return (
    //<HelloWorldScreen></HelloWorldScreen>
    <BasicCounterScreen></BasicCounterScreen>
  );
}
