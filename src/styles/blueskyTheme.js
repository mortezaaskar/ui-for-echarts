import { Colors,Spacing } from 'material-ui/lib/styles';
import { ColorManipulator } from 'material-ui/lib/utils';

/*
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

export default {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  zIndex: {
    layer: 20,
    popover: 20,
  },
  palette: {
    primary1Color: Colors.red500,
    primary2Color: Colors.yellow400,
    primary3Color: Colors.yellow400,

    accent1Color: Colors.orange500, //主按钮颜色
    accent2Color: Colors.red500,
    accent3Color: Colors.blue500,

    textColor: Colors.teal50, //普通文本颜色
    alternateTextColor: Colors.white, //按钮上的文本颜色
    canvasColor: Colors.teal300,
    borderColor: Colors.yellow400,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.9),
    pickerHeaderColor: Colors.orange500,
    clockCircleColor: ColorManipulator.fade(Colors.darkBlack, 0.07),
  }
};
