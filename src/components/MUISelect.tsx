import { Select } from '@mui/material';
import { useField, FieldAttributes } from 'formik';

type MyRadioProps = {
  children: any;
  label?: string;
  disabled?: boolean;
} & FieldAttributes<{}>;

function MUISelect({
  children,
  label,
  disabled,
  ...props
}: MyRadioProps): JSX.Element {
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
        disabled={disabled}
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
