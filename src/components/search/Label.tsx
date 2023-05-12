import { searchLabelClasses, classNames } from '../../utils';
import { LabelProps } from '../../types/search';

const Label = ({ className, children, htmlFor, ...props }: LabelProps) => {
  return (
    <label
      {...props}
      htmlFor={htmlFor}
      className={classNames(searchLabelClasses({ className }))}
    >
      {children}
    </label>
  );
};

export default Label;
