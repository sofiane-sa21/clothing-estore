import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory: React.FC = (): JSX.Element => {
  const sections = useAppSelector(selectDirectorySections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherItemProps }) => (
        <MenuItem key={id} {...otherItemProps} />
      ))}
    </div>
  );
};

export default Directory;
