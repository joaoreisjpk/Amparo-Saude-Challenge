import { formikValueProps, pricesData } from '../interfaces';

interface PriceHelperProps extends pricesData {
  inputsData: formikValueProps;
}

const handlePriceHelper = ({ inputsData, data }: PriceHelperProps) => {
  const { originValue, destinationValue, minutsValue, planValue } = inputsData;

  const item = data.find(
    ({ origem, destino }) =>
      origem === originValue && destino === destinationValue
  );

  const price = item?.price || 0;
  const discountedMinuts = minutsValue - Number(planValue);
  let discountedPrice: number;

  if (discountedMinuts > 0) {
    discountedPrice = price * 1.1 * discountedMinuts;
  } else discountedPrice = 0;

  const defaultPrice = minutsValue * price;

  return { discountedPrice, defaultPrice, ...inputsData };
};

const formValidationHelper = ({
  destinationValue,
  minutsValue,
}: formikValueProps) => {
  if (destinationValue === 'Select') {
    return { destinationValue: 'Por favor selecione o DDD de destino' };
  }
  if (typeof minutsValue !== 'number' || minutsValue <= 0) {
    return {
      minutsValue: 'Por favor digite um número positiro e maior que zero',
    };
  }
  return {};
};

export { handlePriceHelper, formValidationHelper };
