import {
  FadeIn,
  FadeInRight,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  FadeOutLeft,
  FadeOutUp,
} from 'react-native-reanimated';
import { Easing } from 'react-native-reanimated';

const EASING = {
  IN: Easing.bezier(0.55, 0.06, 0.68, 0.19),
  OUT: Easing.bezier(0.13, 0.77, 0.44, 1),
  IN_OUT: Easing.bezier(0.66, 0, 0.24, 1),
};

export const ENTER = {
  FadeIn: FadeIn.easing(EASING.OUT).duration(400),
  FadeInUp: FadeInUp.easing(EASING.OUT).duration(1000),
  FadeInRight: FadeInRight.easing(EASING.OUT).duration(400),
};

export const EXIT = {
  FadeOut: FadeOut.easing(EASING.IN),
  FadeOutUp: FadeOutUp.easing(EASING.IN),
  FadeOutDown: FadeOutDown.easing(EASING.OUT),
  FadeOutLeft: FadeOutLeft.easing(EASING.IN),
};
