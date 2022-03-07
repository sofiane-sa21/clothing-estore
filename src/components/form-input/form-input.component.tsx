import React from 'react';

import './form-input.styles.scss';

type FormInputProps = {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  name: string;
  type: string;
  required?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
  handleChange,
  label,
  ...otherProps
}): JSX.Element => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
