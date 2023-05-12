import { classNames, searchInputClasses } from '../../utils/search';
import { InputProps } from '../../types/search';

const Input = ({
  type,
  name,
  id,
  autoComplete,
  placeholder,
  className,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      type={type}
      name={name}
      id={id}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={classNames(searchInputClasses({ className }))}
    />
  );
};

export default Input;
