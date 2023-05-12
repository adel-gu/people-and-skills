import { SkillItemProps } from '../../types/skill';

const SkillItem = ({ children, ...props }: SkillItemProps) => {
  return <span {...props}>{children}</span>;
};

export default SkillItem;
