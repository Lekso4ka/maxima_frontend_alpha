import React from 'react';
import './style.css';

import { SettingOutlined } from '@ant-design/icons';

const UsersTable = (
  users
) => {
  
  return(
          <tr>
            <td>{users.lastName} {users.firstName} {users.patronymic}</td>
            <td>{users.login}</td>
            <td>{users.role}</td>
            <td>{users.birthDate}</td>
            <td>{users.email}</td>
            <td className='image-button'><SettingOutlined style ={{width: 150}}/></td>
          </tr>
    )
}


export default UsersTable;