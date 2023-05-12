import { cva } from 'class-variance-authority';
import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const classNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs));
};

const searchIconClasses = cva(
  'absolute top-[50%] left-[1em] translate-y-[-50%] text-2xl',
);

const searchLabelClasses = cva(
  'absolute top-[50%] translate-y-[-50%] pl-[3.5em] transition-top duration-500',
);

const searchInputClasses = cva(
  'w-full bg-transparent outline-none border border-[rgba(255,255,255,.54)] pl-[3.5em] py-[.7em] rounded-full transition-border duration-500',
);

const SkillButtonClasses = cva(
  'flex items-center gap-1 px-3 py-2 bg-[rgba(255,255,255,.16)] rounded-full hover:bg-[rgba(255,255,255,.54)] hover:text-[#27292d] transition-all duration-500 text-sm',
);

export {
  classNames,
  searchIconClasses,
  searchLabelClasses,
  searchInputClasses,
  SkillButtonClasses,
};
