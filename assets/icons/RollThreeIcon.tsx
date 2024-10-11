import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const RollThreeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={22}
    fill="none"
    {...props}
  >
    <Circle cx={11} cy={11} r={3} fill="#71879C" fillOpacity={0.2} />
    <Circle cx={31} cy={11} r={3} fill="#71879C" fillOpacity={0.2} />
    <Circle cx={51} cy={11} r={3} fill="#0898a0" fillOpacity={0.4} />
  </Svg>
);
export default RollThreeIcon;
