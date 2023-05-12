import { HTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { SkillButtonClasses } from '../../utils';

export interface SkillPros
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof SkillButtonClasses> {}

export interface SkillItemProps extends HTMLAttributes<HTMLSpanElement> {}
