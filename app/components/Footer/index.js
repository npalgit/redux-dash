import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Menu } from 'semantic-ui-react';
import messages from './messages';
import styled from 'styled-components';

const FooterSection = styled(Menu)`
  align-self: flex-end;
`;

function Footer() {
  return (
    <FooterSection attached>
      <Menu.Item />
    </FooterSection>
  );
}

export default Footer;
