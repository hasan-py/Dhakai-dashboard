import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import RootRoutes from "./modules/routes";
import { persistor, Store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.style.css";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <React.Suspense fallback={<></>}>
          <RootRoutes />
        </React.Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
