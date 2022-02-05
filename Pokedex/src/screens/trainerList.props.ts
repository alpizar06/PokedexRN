import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleProp, ViewStyle} from 'react-native';
import {TrainerListPresets, KeyboardOffsets} from './trainerList.presets';

export interface TrainerListProps extends NativeStackScreenProps<any, any> {
  children?: React.ReactNode;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * One of the different types of presets.
   */
  preset?: TrainerListPresets;

  trainerStore?: any;
  /**
   * An optional background color
   */
  backgroundColor?: string;

  /**
   * An optional status bar setting. Defaults to light-content.
   */
  statusBar?: 'light-content' | 'dark-content';

  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean;

  /**
   * By how much should we offset the keyboard? Defaults to none.
   */
  keyboardOffset?: KeyboardOffsets;

  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   * Only applies to scroll preset.
   */
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
}
