import { classNames, searchIconClasses } from '../../utils/search';
import { IconProps } from '../../types/search';

const Icon = ({ className, children, ...props }: IconProps) => {
  return (
    <span {...props} className={classNames(searchIconClasses({ className }))}>
      {children}
    </span>
  );
};

export default Icon;
