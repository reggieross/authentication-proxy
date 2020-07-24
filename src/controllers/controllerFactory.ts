import { Controller } from '../types';
import { FourOhFourController } from './fourOhfourController';
import { PaymentsController } from './paymentsController';
import { PolicyController } from './policyController';

enum ControllerEnum {
  PAYMENTS,
  POLICY,
  FOUR_OH_FOUR,
}

export const getController = (path: String): Controller => {
  const controller = getControllerEnumForPath(path);
  switch (controller) {
    case ControllerEnum.PAYMENTS:
      return PaymentsController;
    case ControllerEnum.POLICY:
      return PolicyController;
    default:
      return FourOhFourController;
  }
};

const getControllerEnumForPath = (path: String) => {
  if (!path) {
    return ControllerEnum.FOUR_OH_FOUR;
  }

  if (path.toLowerCase().includes('payments')) {
    return ControllerEnum.PAYMENTS;
  } else if (path.toLowerCase().includes('policy')) {
    return ControllerEnum.POLICY;
  }

  return ControllerEnum.FOUR_OH_FOUR;
};
