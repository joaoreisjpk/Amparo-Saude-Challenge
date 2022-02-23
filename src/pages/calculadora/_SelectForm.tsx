import { Field, Form, Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { formValidationHelper, handlePriceHelper } from '../../helpers';
import { pricesData } from '../../interfaces';

export interface ResultProps {
  discountedPrice: number;
  defaultPrice: number;
}

const SelectForm = ({ data }: pricesData) => {
  const [firstSelectOption, setFirstSelectOption] = useState<string[]>();
  const [result, setResult] = useState<ResultProps>();

  const secondSelectOptions = (originValue: string) =>
    data.filter(({ origem }) => origem === originValue);

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
      validate={formValidationHelper}
      onSubmit={async (inputsData) =>
        handlePriceHelper({ inputsData, data, setResult })
      }
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
