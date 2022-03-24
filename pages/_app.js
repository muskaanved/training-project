import '../styles/globals.css'

import { StyledEngineProvider } from "@mui/material/styles";
import { ToastProvider } from "react-toast-notifications";
function MyApp({ Component, pageProps }) {

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ToastProvider
          autoDismiss={true}
          autoDismissTimeout={3000}
          placement="top-center"
        >

          <Component {...pageProps} />

        </ToastProvider>
      </StyledEngineProvider>
    </>)
}

export default MyApp
