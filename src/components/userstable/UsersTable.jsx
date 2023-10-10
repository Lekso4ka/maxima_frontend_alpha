import React from 'react';
import './style.css';

import { SettingOutlined } from '@ant-design/icons';

const UsersTable = (
  users
) => {
  
  return(
  <table className='userstable'>
      <tbody>
        <thead>
          <tr>
            <th>Ф.И.О.</th>
            <th>Логин</th>
            <th>Роль</th>
            <th>Возраст</th>
            <th>Электронный адрес</th>
            <th>Управление</th>
          </tr>
          <tr>
            <td>{users.lastName} {users.firstName} {users.patronymic}</td>
            <td>{users.login}</td>
            <td>{users.role}</td>
            <td>{users.birthDate}</td>
            <td>{users.email}</td>
            <td className='image-button'><SettingOutlined style ={{width: 150}}/></td>
          </tr>
        </thead>
      </tbody>
    </table>
    )
}


export default UsersTable;