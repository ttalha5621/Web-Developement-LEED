import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AuthProvider } from "../providers/AuthProvider";
import RouteWithLayout from './RouteWithLayout';
import LayoutWithNoSideBar from './LayoutWithNoSidebar';
import RouteWithArabicLayout from "./RouteWithArabicLayout";
import PrivateRouteWithLayout from './PrivateRouteWithLayout';
import Button from '../../pages/ButtonPage/Button';
import Home from '../../pages/Home/Home';
import ArabicHome from '../../pages/Home/ArabicHome';
import Main from "../../pages/Home/Main/Main";
import Dashboard from '../../pages/Home/component/Dashboard';
import Price from "../../pages/PricingPage/Price";
import Arabic from "../../pages/ArabicPage/Arabic";
import Invoice from "../../pages/InvoicePage/Invoice";
import Timeline from "../../pages/TimeLinePage/Timeline";
import Login from "../../pages//LoginPage/LoginPage";
import Registration from "../../pages/RegistrationPage/Registration";
import LockScreen from "../../pages/LockScreenPage/LockScreen";
import UserProfile from "../../pages/UserProfilePage/UserProfile";
import RegularForm from "../../pages/Forms/RegularFormPage/RegularForm";
import ExtendedForm from "../../pages/Forms/ExtendedFormPage/ExtendedForm";
import ValidationForm from "../../pages/Forms/ValidationFormPage//ValidationForm";
import Wizard from "../../pages/Forms/WizardPage/Wizard";
import RegularTable from "../../pages/Tables/RegularTable/RegularTable";
import ExtendedTable from "../../pages/Tables/ExtendedTable/ExtendedTable";
import DataTable from "../../pages/Tables/DataTable/DataTable";
import FullScreenMap from "../../pages/Maps/FullScreenMap/FullScreenMap";
import GoogleMap from "../../pages/Maps/GoogleMap/GoogleMap";
import VectorMap from "../../pages/Maps/VectorMap/VectorMap";
import Widgets from "../../pages/WidgetPage/Widgets";
import Chart from "../../pages/ChartPage/Chart";
import Calendar from "../../pages/CalendarPage/Calendar";
import Typography from "../../pages/TypographyPage/Typography"
import Icons from "../../pages/IconsPage/Icons"
import Notifications from "../../pages/NotificationsPage/Notifications"
import SweetAlert from "../../pages/SweetAlertPage/SweetAlert"
import Panel from "../../pages/PanelPage/Panel"
import Grid from "../../pages/GridPage/Grid"

const history = createBrowserHistory();

const AppRoutes = (props) => {
    return (
        <Router history={history}>
            <AuthProvider>
                <Switch>
                    <RouteWithLayout
                        name="dashboard"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/"
                        component={Dashboard}
                    />
                    <RouteWithLayout
                        name="buttons"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/buttons"
                        component={Button}
                    />

                    <RouteWithLayout
                        name="grids"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/grids"
                        component={Grid}
                    />
                    <RouteWithLayout
                        name="panels"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/panels"
                        component={Panel}
                    />
                    <RouteWithLayout
                        name="alerts"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/alerts"
                        component={SweetAlert}
                    />
                    <RouteWithLayout
                        name="notification"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/notification"
                        component={Notifications}
                    />
                    <RouteWithLayout
                        name="icons"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/icons"
                        component={Icons}
                    />
                    <RouteWithLayout
                        name="typography"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/typography"
                        component={Typography}
                    />
                    <LayoutWithNoSideBar
                        name="pricing"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Main}
                        exact
                        path="/pricing"
                        component={Price}
                    />

                    <RouteWithArabicLayout
                        name="arabic"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={ArabicHome}
                        exact
                        path="/arabic"
                        component={Arabic}
                    />

                    <LayoutWithNoSideBar
                        name="invoice"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Main}
                        exact
                        path="/invoice"
                        component={Invoice}
                    />

                    <LayoutWithNoSideBar
                        name="login"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Main}
                        exact
                        path="/login"
                        component={Login}
                    />

                    <LayoutWithNoSideBar
                        name="registration"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Main}
                        exact
                        path="/registration"
                        component={Registration}
                    />

                    <LayoutWithNoSideBar
                        name="lock"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Main}
                        exact
                        path="/lock"
                        component={LockScreen}
                    />
                    <RouteWithLayout
                        name="timeline"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/timeline"
                        component={Timeline}
                    />

                    <RouteWithLayout
                        name="profile"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/profile"
                        component={UserProfile}
                    />

                    <RouteWithLayout
                        name="regular form"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/regular-form"
                        component={RegularForm}
                    />

                    <RouteWithLayout
                        name="extended form"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/extended-form"
                        component={ExtendedForm}
                    />

                    <RouteWithLayout
                        name="validation form"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/validation-form"
                        component={ValidationForm}
                    />

                    <RouteWithLayout
                        name="wizards"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/wizards"
                        component={Wizard}
                    />

                    <RouteWithLayout
                        name="regular table"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/regular-table"
                        component={RegularTable}
                    />

                    <RouteWithLayout
                        name="extended table"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/extended-table"
                        component={ExtendedTable}
                    />

                    <RouteWithLayout
                        name="data table"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/data-table"
                        component={DataTable}
                    />

                    <RouteWithLayout
                        name="full screen map"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/full-screen-map"
                        component={FullScreenMap}
                    />

                    <RouteWithLayout
                        name="google map"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/google-map"
                        component={GoogleMap}
                    />

                    <RouteWithLayout
                        name="vector map"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/vector-map"
                        component={VectorMap}
                    />

                    <RouteWithLayout
                        name="widgets"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/widgets"
                        component={Widgets}
                    />

                    <RouteWithLayout
                        name="charts"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/charts"
                        component={Chart}
                    />

                    <RouteWithLayout
                        name="calendar"
                        sidebar={props.sidebar}
                        sidebar_color={props.sidebar_color}
                        handelSidebar={props.handelSidebar}
                        layout={Home}
                        exact
                        path="/calendar"
                        component={Calendar}
                    />

                </Switch>
            </AuthProvider>
        </Router>

    );
}

export default AppRoutes;