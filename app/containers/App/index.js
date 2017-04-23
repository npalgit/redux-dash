import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - BC-Demo"
        defaultTitle="BC-Demo"
        meta={[
          { name: 'description', content: 'BC-Demo' },
        ]}
      />
      <Header />
      {React.Children.toArray(props.children)}
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
