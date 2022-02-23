import { Field, Form, Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { formikValueProps, pricesData } from '../../interfaces';

const SelectForm = ({ data }: pricesData) => {
  const [result, setResult] =
    useState<{ descountedPrice: number; defaultPrice: number }>();

  const secondSelectOptions = (originValue: string) =>
    data.filter(({ origem }) => origem === originValue);
  const [firstSelectOption, setFirstSelectOption] = useState<string[]>();

  const handleClick = (inputsData: formikValueProps) => {
    const { originValue, destinationValue, minutsValue, planValue } =
      inputsData;
    const item = data.find(
      ({ origem, destino }) =>
        origem === originValue && destino === destinationValue
    );

    const price = item?.price || 0;
    const totalMinuts = Number(minutsValue) - Number(planValue);

    let descountedPrice: number;
    if (totalMinuts > 0) {
      descountedPrice = price * 1.1 * totalMinuts;
    } else descountedPrice = 0;

    const defaultPrice = Number(minutsValue) * price;

    setResult({ descountedPrice, defaultPrice });
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
      onSubmit={async (inputsData) => handleClick(inputsData)}
    >
      {({ values }) => {
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
                `com falemais: ${result.descountedPrice} sem falemais:
        ${result.defaultPrice}`}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SelectForm;
