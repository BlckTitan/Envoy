import React from 'react'

export default function DriverRow({element}) {
  return (
    <tr>
        <td style={{width: '100px'}}>{element.id}</td>
        <td>
            <span className={element.status}></span>
            <img 
                className='driverImg driver'
                src={element.img}
                alt=''
            />
            {element.driverDetail}
        </td>
        <td className={element.status}>{element.status}</td>
        <td>{element.contact}</td>
        <td>{element.ridesToday}</td>
    </tr>
  )
}
