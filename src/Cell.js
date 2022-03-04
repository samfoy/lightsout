import React from 'react';
import './Cell.css';

const Cell = props => {
  const { isLit, x, y, onClick } = props;
  const classes = `Cell ${isLit && 'Cell-lit'}`;

  const handleFlip = () => {
    onClick(x, y);
  };

  return <td className={classes} onClick={handleFlip} />;
};

export default Cell;
