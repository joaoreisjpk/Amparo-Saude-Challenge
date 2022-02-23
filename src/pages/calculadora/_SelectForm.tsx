import { Button, FormControl, InputLabel, MenuItem } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import MUInput from '../../components/MUInput';
import MUISelect from '../../components/MUISelect';
import { formValidationHelper, handlePriceHelper } from '../../helpers';
import { pricesData } from '../../interfaces';

export interface ResultProps {
  discountedPrice: number;
  defaultPrice: number;
}

const SelectForm = ({ data }: pricesData) => {
  const [firstSelectMenuItem, setFirstSelectMenuItem] = useState<string[]>();
  const [result, setResult] = useState<ResultProps>();

  const secondSelectMenuItems = (originValue: string) =>
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
    setFirstSelectMenuItem(['Select', ...dataReduce]);
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
      {({ values }) => {
        return (
          <Form>
            <FormControl>
              <InputLabel id='originValue'>DDD de Origem</InputLabel>
              <MUISelect label='exchangeCurrency' name='originValue'>
                {firstSelectMenuItem?.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </MUISelect>
            </FormControl>

            <FormControl>
              <InputLabel id='destinationValue'>DDD de Destino</InputLabel>
              <MUISelect
                label='destinationValue'
                name='destinationValue'
                disabled={values.originValue === 'Select'}
              >
                <MenuItem value='Select'>Select</MenuItem>
                {secondSelectMenuItems(values.originValue)?.map(
                  ({ id, destino }) => (
                    <MenuItem key={id} value={destino}>
                      {destino}
                    </MenuItem>
                  )
                )}
              </MUISelect>
            </FormControl>

            <FormControl>
              <InputLabel id='planValue'>Plano</InputLabel>
              <MUISelect name='planValue' label='planValue'>
                <MenuItem value={'30'}>FaleMais 30</MenuItem>
                <MenuItem value={'60'}>FaleMais 60</MenuItem>
                <MenuItem value={'120'}>FaleMais 120</MenuItem>
              </MUISelect>
            </FormControl>

            <MUInput name='minutsValue' type='number' label='Minutagem' />

            <Button type='submit' size='large' variant='contained'>
              Calcular
            </Button>
            <div>
              {!!result &&
                `com falemais: ${result.discountedPrice} sem falemais:
        ${result.defaultPrice}`}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SelectForm;
