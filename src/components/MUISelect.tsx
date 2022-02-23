import { Select } from '@mui/material';
import { useField, FieldAttributes } from 'formik';
import { ReactElement } from 'react';

type MyRadioProps = {
  children: any;
  label?: string;
} & FieldAttributes<{}>;

function MUISelect({ children, label, ...props }: MyRadioProps): JSX.Element {
  const [field, meta] = useField<{}>(props);
  const errorText: string = meta.error && meta.touched ? meta.error : '';
  return (
    <>
      <Select
        error={!!errorText}
        variant='outlined'
        color='secondary'
        margin='none'
        labelId={props.name}
        type={props.type}
        {...field}
        label={label}
        sx={{
          width: 265,
        }}
      >
        {children}
      </Select>
      {!!errorText && (
        <div
          style={{
            color: 'red',
            opacity: '.8',
            fontSize: '.8rem',
            margin: '.2rem 1rem 0',
          }}
        >
          {errorText}
        </div>
      )}
    </>
  );
}

export default MUISelect;
