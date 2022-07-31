import React from 'react'
//organism
import Widget from '../../organism/widget/Widget';
import TableTransactions from '../../organism/transactions/TableTransactions';
import TableDrivers from '../../organism/drivers/TableDrivers';
import IncomingRequest from '../../organism/incomingRequest/IncomingRequest';
import DailyEarnings from '../../organism/dailyEarnings/DailyEarnings';
//styled-components
import { 
  _Container, _UserTitle, _Transaction, _ContainerDivers, _Drivers, _Report, _ReportEarnings
 } from './Dashboard.style';
 
export default function Dashboard() {
  return (
    <_Container>
      <_UserTitle>
        <h1>Welcome, Richard</h1>
      </_UserTitle>
      <div>
        <Widget/>
      </div>
      <_Transaction>
        <TableTransactions/>
      </_Transaction>

      <_ContainerDivers>
        <_Drivers>
          <TableDrivers/>
        </_Drivers>

        <_Report>
          <_ReportEarnings>
            <IncomingRequest/>
          </_ReportEarnings>
          <_ReportEarnings>
            <DailyEarnings/>
          </_ReportEarnings>
        </_Report>
      </_ContainerDivers>
    </_Container>
  )
}
