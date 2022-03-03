import React from 'react';

import './menu-item.styles.scss';

type MenuItemProps = {
  title: string;
  imageUrl: string;
  size?: 'large';
};

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  title,
  imageUrl,
  size,
}: MenuItemProps): JSX.Element => (
  <div className={`${size} menu-item`}>
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

export default MenuItem;
