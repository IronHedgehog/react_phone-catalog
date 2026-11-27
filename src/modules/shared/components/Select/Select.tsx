import { useId, type ChangeEvent } from 'react';

import s from './Select.module.scss';

export interface SelectOption<T extends string> {
  label: string;
  value: T;
}

interface SelectProps<T extends string> {
  label: string;
  options: readonly SelectOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

export const Select = <T extends string>({
  label,
  options,
  value,
  onChange,
}: SelectProps<T>) => {
  const id = useId();

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(
      option => option.value === e.target.value,
    );

    if (selectedOption) {
      onChange(selectedOption.value);
    }
  };

  return (
    <div className={s.container}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>

      <select
        id={id}
        className={s.select}
        value={value}
        onChange={onChangeHandler}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
