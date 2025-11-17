import React from 'react';

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str: string, length: number): string => {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
};

export const TextComponent: React.FC<{ text: string }> = ({ text }) => {
  return (<div style={{ color: 'blue' }}>{capitalize(text)}</div>);
};