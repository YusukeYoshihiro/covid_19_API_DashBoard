import React from "react";
import Dashboard from "./features/covid/DashBoard/Dashboard";
import Footer from "./features/covid/Footer/Footer";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";


const theme = createMuiTheme({
  typography: {
    fontFamily: ["Recursive", "sans-serif"].join(","),
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="wrapper">
      <Dashboard/>
      <Footer />
    </div>
  </ThemeProvider>
  );
}

export default App;
