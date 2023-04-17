import "../styles/globals.scss";
import { wrapper } from "../store/configureStore";
import React from "react";
import Layout from "./layout";
import { Provider } from "react-redux";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
