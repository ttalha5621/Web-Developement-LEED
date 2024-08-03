import React, { useState } from 'react';
import AppRoutes from "./layout/routes/AppRoutes";
import Notify from './pages/Notify/Notify';
import FixedPlugIn from './pages/shared/Plugin/FixedPlugIn';

const App = () => {

  // ImportScript("/assets/include/js/now-ui-dashboard.minaa26.js?v=1.5.0")
  const [sidebar, setSidebar] = useState("");
  const [sidebar_color, setSidebar_color] = useState("orange");

  const handelSidebar = (sidebar_mini) => {
    setSidebar(sidebar_mini);

  }
  const handelColor = (color) => {
    setSidebar_color(color);
  }


  return (
    <>
      <AppRoutes handelSidebar={handelSidebar} sidebar={sidebar} sidebar_color={sidebar_color} />
      <FixedPlugIn
        bgColor={sidebar_color}
        handelSidebar={handelSidebar}
        handelColor={handelColor} />
      <Notify sidebar={sidebar} />
    </>);
}

export default App;
