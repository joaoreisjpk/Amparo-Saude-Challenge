import { Field, Form, Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { formikValueProps, pricesData } from '../../interfaces';

interface ResultProps {
  discountedPrice: number;
  defaultPrice: number;
}

const SelectForm = ({ data }: pricesData) => {
  const [firstSelectOption, setFirstSelectOption] = useState<string[]>();
  const [result, setResult] = useState<ResultProps>();

  const secondSelectOptions = (originValue: string) =>
    data.filter(({ origem }) => origem === originValue);

  const handlePrice = (inputsData: formikValueProps) => {
    const { originValue, destinationValue, minutsValue, planValue } =
      inputsData;

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

    setResult({ discountedPrice, defaultPrice });
  };

  const formValidation = ({
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

  const dataReduce = useMemo(
    () =>
      data.reduce((acc, { origem }) => {
        if (acc.includes(origem)) return acc;

        return [...acc, origem];
      }, [] as string[]),
    [data]
  );

  useEffect(() => {
    setFirstSelectOption(['Select', ...dataReduce]);
  }, [dataReduce]);

  return (
    <Formik
      initialValues={{
        originValue: 'Select',
        destinationValue: 'Select',
        planValue: '30',
        minutsValue: 0,
      }}
      validate={formValidation}
      onSubmit={async (inputsData) => handlePrice(inputsData)}
    >
      {({ values, errors }) => {
        console.log(errors);
        return (
          <Form>
            <Field as='select' name='originValue' id='originValue'>
              {firstSelectOption?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Field>
            <Field
              name='destinationValue'
              id='destinationValue'
              as='select'
              disabled={values.originValue === 'Select'}
            >
              <option value='Select'>Select</option>
              {secondSelectOptions(values.originValue)?.map(
                ({ id, destino }) => (
                  <option key={id} value={destino}>
                    {destino}
                  </option>
                )
              )}
              Field
            </Field>
            <Field name='planValue' id='planValue' as='select'>
              <option value={'30'}>FaleMais 30</option>
              <option value={'60'}>FaleMais 60</option>
              <option value={'120'}>FaleMais 120</option>
            </Field>
            <Field name='minutsValue' id='minutsValue' type='number' />
            <button type='submit'>Calcular</button>
            <div>
              {!!result &&
                `com falemais: ${result.discountedPrice} sem falemais:
        ${result.defaultPrice}`}
            </div>
            <div>{errors.destinationValue && errors.minutsValue}</div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SelectForm;
