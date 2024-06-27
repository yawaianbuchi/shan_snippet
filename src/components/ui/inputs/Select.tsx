import * as React from 'react';
import {
  Select as MSelect,
  FormControl,
  styled,
  InputLabel,
  OutlinedSelectProps,
  MenuItem,
} from '@mui/material';

interface SelectProps extends OutlinedSelectProps {
  label?: string;
  value?: string | number;
  onChange: (event?: any) => void;
  options: { label: string; value: string | number }[];
}

const TextFieldStyled = styled(MSelect)<{}>(() => ({}));


const Select = React.forwardRef<HTMLDivElement, SelectProps>(function Select(
  {  label, value, onChange, options, ...rest   },
  ref
) {
  return (
    <FormControl  ref={ref} fullWidth>
      <InputLabel id="inputSelectLabel">{label}</InputLabel>
      <TextFieldStyled
        labelId="inputSelectLabel"
        id="inputSelectLabel"
        value={value}
        label={label}
        onChange={onChange}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} className="w-full">
            {option.label}
          </MenuItem>
        ))}
      </TextFieldStyled>
    </FormControl>
  );
});

export default Select;
