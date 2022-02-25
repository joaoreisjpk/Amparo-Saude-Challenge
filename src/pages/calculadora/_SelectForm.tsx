import { useEffect, useMemo, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Form, Formik } from 'formik';

import MUISelect from '../../components/MUISelect';
import MUInput from '../../components/MUInput';

import { formikValueProps, pricesData } from '../../interfaces';
import { formValidationHelper, handlePriceHelper } from '../../helpers';
import { useResults } from '../../hooks/useResults';

const SelectForm = ({ data }: pricesData) => {
  const [firstSelectMenuItem, setFirstSelectMenuItem] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(false);
  const { setResult } = useResults();

  const secondSelectMenuItems = (originValue: string) =>
    data?.filter(({ origem }) => origem === originValue);

  const dataReduce = useMemo(
    () =>
      data?.reduce((acc, { origem }) => {
        if (acc.includes(origem)) return acc;

        return [...acc, origem];
      }, [] as string[]),
    [data]
  );

  const handlePrice = async (formikValues: formikValueProps) => {
    const newResult = handlePriceHelper({ formikValues, data });

    setIsLoading(true);
    await setResult(newResult);
    setIsLoading(false);
  };

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
      validate={(formikValues) =>
        formValidationHelper({
          formikValues,
          data,
        })
      }
      onSubmit={handlePrice}
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

            <Button
              type='submit'
              size='large'
              variant='contained'
              sx={{ height: '3.4rem', background: '#44b365', width: '8rem' }}
            >
              {isLoading ? <CircularProgress /> : 'Calcular'}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SelectForm;
