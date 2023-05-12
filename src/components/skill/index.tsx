import { SkillPros } from '../../types/skill';
import { SkillButtonClasses, classNames } from '../../utils';

const Skill = ({ className, children, ...props }: SkillPros) => {
  return (
    <button
      {...props}
      className={classNames(SkillButtonClasses({ className }))}
    >
      {children}
    </button>
  );
};

export default Skill;
