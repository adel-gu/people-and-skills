import React from 'react';

const Avatar = () => {
  return (
    <div className="relative w-[120px] h-[120px]">
      <div className="shape bg-[#5e626b] w-full h-full absolute top-0 left-[calc(50%-60px)]"></div>
      <img
        src="https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1683765273/origin/starrgate/users/profile_bc74153caf7316b6c678e4b1a19ee1fafacd75d8.jpg"
        alt=""
        className="avatar-img object-cover w-[112px] h-[112px] absolute top-1 left-1"
      />
    </div>
  );
};

const AvatarSm = () => {
  return (
    <div className="relative w-[40px] h-[40px]">
      <div className="shape bg-[#5e626b] w-full h-full absolute top-0 left-[calc(50%-20px)]"></div>
      <img
        src="https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1683765273/origin/starrgate/users/profile_bc74153caf7316b6c678e4b1a19ee1fafacd75d8.jpg"
        alt=""
        className="avatar-img object-cover w-[36px] h-[36px] absolute top-[2px] left-[2px]"
      />
    </div>
  );
};

export { Avatar, AvatarSm };
