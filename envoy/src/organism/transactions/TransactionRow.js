import React from 'react'

export default function TransactionRow({element, index}) {
  return (
    <tr key={index}>
        <td style={{width: '250px'}}>{element.date}</td>
        <td>{element.tripId}</td>
        <td>{element.payment}</td>
        <td>{element.amount}</td>
        <td>
            <span className={element.customer}></span>
            <img 
                className='customerImg driver'
                src={element.img}
                alt=''
            />
            {element.customer}
        </td>
        <td style={{width: '250px'}}>
            <span className={element.driverDetail}></span>
            <img 
                className='driverImg driver'
                src={element.img}
                alt=''
            />
            {element.driverDetail}
        </td>
        <td className={element.status}>{element.status}</td>
        <td>{element.action}</td>
    </tr>
  )
}
