import { v4 as uuid } from 'uuid';

import { extendedData } from '../interfaces';

const handlePriceHelper = ({ formikValues, data }: extendedData) => {
  const { originValue, destinationValue, minutsValue, planValue } =
    formikValues;

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

  const id = uuid();

  return { discountedPrice, defaultPrice, ...formikValues, id };
};

const formValidationHelper = ({ formikValues, data }: extendedData) => {
  const { destinationValue, originValue, minutsValue } = formikValues;

  const optionsValidation = data.some(
    ({ destino, origem }) =>
      destino === destinationValue && originValue === origem
  );
  if (originValue === 'Select') {
    return { originValue: 'Por favor selecione o DDD de destino' };
  }
  if (destinationValue === 'Select') {
    return { destinationValue: 'Por favor selecione o DDD de destino' };
  }
  if (typeof minutsValue !== 'number' || minutsValue <= 0) {
    return {
      minutsValue: 'Por favor digite um número positiro e maior que zero',
    };
  }
  if (!optionsValidation)
    return {
      destinationValue: 'Por favor atualize seu DDD de destino',
    };

  return {};
};

const moneyFormatting = (money: number) => {
  const formattedMoney = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'BRL',
  }).format(money);

  return formattedMoney;
};

const background = (color: string) => {
  return {
    background: color,
    '&:hover': {
      backgroundColor: color,
      opacity: [0.9, 0.8, 0.7],
    },
  };
};

export { handlePriceHelper, formValidationHelper, moneyFormatting, background };
