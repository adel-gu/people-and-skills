import { AvatarProps } from '../../types/avatar';

const Avatar = ({ src, alt, ...props }: AvatarProps) => {
  return (
    <div className="relative w-[120px] h-[120px]">
      <div className="shape bg-[#5e626b] w-full h-full absolute top-0 left-[calc(50%-60px)]"></div>
      <img
        {...props}
        src={src}
        alt={alt}
        className="avatar-img object-cover w-[112px] h-[112px] absolute top-1 left-1"
      />
    </div>
  );
};

export { Avatar };
