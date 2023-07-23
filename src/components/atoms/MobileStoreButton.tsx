'use client';
import { useEffect, useState } from 'react';
import { MobileStoreButtonProps } from '~/shared/types';
import Image from 'next/image';
import Link from 'next/link';

const imageLinks = {
  ios: {
    img: 'https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg',
    alt: 'iOS Store button',
  },
  android: {
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg',
    alt: 'Android Store button',
  },
};

const MobileStoreButton = ({
  store,
  url,
  height = 35,
  width = 125,
  linkStyles,
  linkProps,
  ...props
}: MobileStoreButtonProps) => {
  const [isDomLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return isDomLoaded ? (
    <Image src={imageLinks[store].img} width={width} height={height} alt={imageLinks[store].alt} />
  ) : null;
};

export default MobileStoreButton;
