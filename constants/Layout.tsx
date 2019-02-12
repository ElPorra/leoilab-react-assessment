import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const sizingUnit = 10;

export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375,
  sizingUnit: sizingUnit
};
