import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Dashboard from '../../template/dashboard/Dashboard';
import Drivers from '../../template/drivers/Drivers';
import LiveTrack from '../../template/liveTrack/LiveTrack';
import Transactions from '../../template/transactions/Transactions';
import Settings from '../../template/settings/Setting';
import ErrorPage from '../../template/errorPage/ErrorPage';
import Layout from '../layout/Layout';

export default function RouteEngine() {
    return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="drivers" element={<Drivers />} />
            <Route path="livetrack" element={<LiveTrack />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
        </Routes>
    </BrowserRouter>
    )
}