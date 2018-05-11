import * as React from 'react';

interface Props {
  text: string;
}

function Editable({ text }: Props) {
  return (
    <span>{text}</span>
  );
}

export default Editable;
