import React from 'react';
import { TwitterPicker } from 'react-color';
import styles from './color-mode-panel.module.scss';

const ColorModePanelView = ({ lightSetColorMode, color }) => {
  const handleChangeComplete = (evt) => {
    lightSetColorMode(evt.hex);
  };
  const presetColor = color ? `#${color}` : '#8e44ad';

  return (
    <div className={ styles.colorModePanel }>
      <div>
        <div className={ styles.colorModePanel__sliderWrapper }>
          {/* <SliderPicker></SliderPicker> */}
        </div>
        <div>
          <TwitterPicker
            color={ presetColor } 
            triangle={ 'hide' }
            onChangeComplete={ handleChangeComplete }>
          </TwitterPicker>
        </div>
      </div>
    </div>
  );
};

export { ColorModePanelView };