import React from 'react';

interface ITitleProps {
  h2Text: string;
  smallText: string;
}

function Title({ h2Text, smallText }: ITitleProps) {
  return (
    <div>
      <h2>{h2Text}</h2>
      <small>{smallText}</small>
    </div>
  );
}

export default Title;
