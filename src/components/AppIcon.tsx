import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { Image, ImageProps } from 'react-native';

import { Icons } from '@src/assets';

export type IconProps = Omit<ImageProps, 'source'> & {
  icon: Icons;
};

export const Icon = (props: IconProps) => {
  const { icon } = props;
  return <Image source={icon} resizeMode="contain" {...props} />;
};
