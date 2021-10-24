import { Product } from 'WooCommerce';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

type buttonStyleProps = {
  /**
   * current selected;
   */
  is_selected: boolean;
  /**
   * current color
   */
  color: string;
};

const useStyles = makeStyles({
  button: (props: buttonStyleProps) => {
    const buttonStyle = {
      width: '2rem',
      height: '2rem',
      marginLeft: '0.5rem',
      marginTop: '3rem',
      outline: 'none !important',
      minWidth: 'inherit !important',
      borderRadius: '50%',
      backgroundColor: props.color,
      borderColor: props.color,
      borderWidth: '0.85rem',
      borderStyle: 'solid',
      '&:hover': {
        cursor: 'pointer',
        opacity: '80%',
      },
    };
    if (props.is_selected) {
      return {
        ...buttonStyle,
        width: '2.5rem',
        height: '2.5rem',
        backgroundColor: 'transparent',
      };
    } else {
      return {
        ...buttonStyle,
      };
    }
  },
});

export const ColorProportion = ({ item }: { item: Product }) => {
  const [idxSelected, setIdxSelected] = useState<number>();

  const handleColorActive = (idx: number) => {
    setIdxSelected(idx);
  };
  return (
    <>
      {item?.attributes?.map((val) => {
        if (val.name === 'color') {
          return (
            <div
              key={val?.name}
              className={'absolute z-10 -mt-80 flex flex-col justify-between items-center outline-none border-none'}
            >
              {val?.options.map((i, idx) => {
                const classes = useStyles({
                  is_selected: idxSelected === idx,
                  color: i.toLowerCase(),
                });
                return <div key={i} className={classes.button} onClick={() => handleColorActive(idx)} />;
              })}
            </div>
          );
        }
      })}
    </>
  );
};
