import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './menu-item.styles.scss';

type MenuItemProps = {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: 'large';
};

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  imageUrl,
  size,
  linkUrl,
}: MenuItemProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => {
        navigate(linkUrl);
      }}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
