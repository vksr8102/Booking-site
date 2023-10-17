
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../src/layouts/Navbar"
import Footer from "../src/layouts/Footer"
import store, { persistor } from '../src/redux/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Toaster/>
        </PersistGate>
      </Provider>
    </>
  )
}
