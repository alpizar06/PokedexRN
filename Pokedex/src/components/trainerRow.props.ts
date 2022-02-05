import {StyleProp, ViewStyle} from 'react-native';

export interface TrainerRowProps {
  children?: React.ReactNode;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * An optional background color
   */
  backgroundColor?: string;

  trainerName: string;
  trainerLastname: string;
  trainerImage: string;
  traineLocation: string;
  trainerPhone: string;
  trainerId: number;
  /**
   * An optional status bar setting. Defaults to light-content.
   */
  statusBar?: 'light-content' | 'dark-content';

  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean;

  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   * Only applies to scroll preset.
   */
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
}
