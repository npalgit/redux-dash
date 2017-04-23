import React, { PureComponent } from 'react';
// import { FormattedMessage } from 'react-intl';
import { Menu } from 'semantic-ui-react';

class MainHeader extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Menu attached inverted>
        <Menu.Item header>BC-DEMO</Menu.Item>
      </Menu>
    );
  }
}

export default MainHeader;
