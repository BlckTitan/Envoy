import * as React from 'react';
//import { DataGrid } from '@mui/x-data-grid';
//scss
import './scss/tableStyle.scss';
export default function Table({rows, RenderedRow, columns, order, width="250px"}) {
  
  return (
      <>
        <table>
          <thead>
            <tr>
              {columns.map((element)=>(
                <th className={element.field}>
                  {element.headerName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              rows.map((element, index) => (
                <RenderedRow element={element} index={index}/>
              ))
            }
          </tbody>
        </table>
      </>
  );
}