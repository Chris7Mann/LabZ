'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const HeroBackground = dynamic(() => import('@/components/HeroBackground'), {
  ssr: false,
});

export default function HeroBackgroundWrapper() {
  return React.createElement(HeroBackground);
}