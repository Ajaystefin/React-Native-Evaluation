import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum Screen {
  CLAIM_INSURANCE = 'CLAIM_INSURANCE',
}

export type NavStackParams = {
  [Screen.CLAIM_INSURANCE]: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;
