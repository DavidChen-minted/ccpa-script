import React from 'react';
import { NextComponentType } from 'next';
import { AppContext, AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';
import { globalButtonReset } from 'utils/style/buttonReset';
import withRedux from 'utils/redux/withRedux';
import makeStore from 'stores';

export interface ModifiedAppInitialProps<A = { [key in string]?: string }> {
  appProps: A;
}

export interface ExtendedAppProps<
  P = { [key in string]?: string },
  A = { [key in string]?: string }
> extends AppProps<P>, ModifiedAppInitialProps<A> {
  store: ReturnType<typeof makeStore>;
}

const myApp: NextComponentType<
  AppContext,
  ModifiedAppInitialProps,
  ExtendedAppProps
> = ({ Component, pageProps, appProps, store }) => {
  return (
    <Provider store={store}>
      <Global styles={globalButtonReset} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...appProps} {...pageProps} />
    </Provider>
  );
};

myApp.getInitialProps = async () => {
  return { appProps: {} };
};

export default withRedux({ makeStore })(myApp);
