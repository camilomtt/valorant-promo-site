import { useStore } from '@nanostores/react';
import {
  isStepOne,
} from './stories/navigationStore.js';
import { StepOne } from '../home/step-one.jsx';

export const Container = () => {
  const $isStepOne = useStore(isStepOne);


  return (
    <>
      {$isStepOne ? <StepOne /> : null}
    </>
  );
};
