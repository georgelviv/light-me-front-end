import React from 'react';
import { RadioGroup } from 'shared/components';

const DemoModePanel = () => {
  return (
    <div>
      <RadioGroup
        lists={ ['demo1'] }
        active={ 'demo1' } >
      </RadioGroup>
    </div>
  );
};

export { DemoModePanel };