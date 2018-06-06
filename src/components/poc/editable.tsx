import React from 'react';

interface Props {
  text: string;
}

export function Editable({ text }: Props) {
  return <span>{text}</span>;
}

export default Editable;
