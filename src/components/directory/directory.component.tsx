import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

type Section = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: 'large';
};

class Directory extends React.Component {
  state: {
    sections: Section[];
  };

  constructor(props: any) {
    super(props);
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'jackets',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'sneakers',
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'womens',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'mens',
        },
      ],
    };
  }

  render(): React.ReactNode {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherItemProps }) => (
          <MenuItem key={id} {...otherItemProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
