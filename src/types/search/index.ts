import { HtmlHTMLAttributes } from 'react';
import {
  searchIconClasses,
  searchInputClasses,
  searchLabelClasses,
} from '../../utils';
import { VariantProps } from 'class-variance-authority';

export interface IconProps
  extends HtmlHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof searchIconClasses> {}

export interface InputProps
  extends HtmlHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof searchInputClasses> {
  type: string;
  name: string;
  id: string;
  autoComplete: string;
  placeholder: string;
}

export interface LabelProps
  extends HtmlHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof searchLabelClasses> {
  htmlFor: string;
}
