import {
  isStepOne,
} from '../stories/navigationStore';

const stateVariables = {
  stepOne: isStepOne,
};

export const useNavigation = (section) => {
  Object.keys(stateVariables).forEach((s) => {
    stateVariables[s].set(s === section);
  });
};
