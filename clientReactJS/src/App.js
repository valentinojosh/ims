import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Employee from './Employee';
import LoginPage from './IMSindex';
import DeleteAdmin from "./deleteAdmin";
import MinorInjury from './forms/MinorInjuryLog';
import AccidentReport from './forms/AccidentIncidentReport';
import EmployeeInjury from './forms/EmployeeInjuryReport';
import NotificationReport from './forms/NotificationOfInjuryReport';
import PropertyReport from './forms/PropertyLossReport';
import VehicleReport from './forms/VehicleAccidentReport';
import Admin from "./Admin";
import CreateAdmin from "./createAdmin";
import Settings from "./Settings";
import ViewMinorInjury from './tables/viewMinorInjuryLog';
import ViewPropertyLoss from './tables/viewPropertyLossReport';
import ViewVehicleAccident from './tables/viewVehicleAccidentReport';
import PrivateRoute from "./PrivateRoute";
import SubmissionPage from "./SubmissionPage";
import ViewNotificationOfInjuryToEmployer from "./tables/viewNotificationOfInjuryToEmployerReport";
import ViewAccidentIncident from "./tables/viewAccidentIncidentReport";
import ViewEmployeeInjury from "./tables/viewEmployeeInjuryReport";

import './App.css';

function App() {
    return (
        <BrowserRouter basename="/ims">
            <div className="App">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/employee" element={<Employee />} />
                        <Route path="/submitted" element={<SubmissionPage />} />
                        <Route path="/admin/settings/createAdmin" element={<PrivateRoute><CreateAdmin /></PrivateRoute>} />
                        <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
                        <Route path="/admin/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
                        <Route path="/form/viewMinorInjury" element={<PrivateRoute><ViewMinorInjury /></PrivateRoute>} />
                        <Route path="/form/viewVehicleAccidentReport" element={<PrivateRoute><ViewVehicleAccident /></PrivateRoute>} />
                        <Route path="/form/viewPropertyLossReport" element={<PrivateRoute><ViewPropertyLoss /></PrivateRoute>} />
                        <Route path="/form/viewAccidentIncidentReport" element={<PrivateRoute><ViewAccidentIncident /></PrivateRoute>} />
                        <Route path="/form/viewEmployeeInjuryReport" element={<PrivateRoute><ViewEmployeeInjury /></PrivateRoute>} />
                        <Route path="/form/viewNotificationOfInjuryToEmployerReport" element={<PrivateRoute><ViewNotificationOfInjuryToEmployer /></PrivateRoute>} />
                        <Route path="/admin/settings/deleteAdmin" element={<PrivateRoute><DeleteAdmin /></PrivateRoute>} />
                        <Route path="/form/AccidentReport" element={<AccidentReport />} />
                        <Route path="/form/MinorInjury" element={<MinorInjury />} />
                        <Route path="/form/EmployeeInjury" element={<EmployeeInjury />} />
                        <Route path="/form/NotificationReport" element={<NotificationReport />} />
                        <Route path="/form/PropertyReport" element={<PropertyReport />} />
                        <Route path="/form/VehicleReport" element={<VehicleReport />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
