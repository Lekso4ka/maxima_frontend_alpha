import React from 'react';
import './style.css';

const UsersTable = () => {
  return (
    <table className='userstable'>
      <tbody>
        <thead>
          <tr>
            <th>Ф.И.О.</th>
            <th>Логин</th>
            <th>Роль</th>
            <th>Возраст</th>
            <th>Электронный адрес</th>
            <th></th>
          </tr>
          <tr>
            <td>Иванов Борис Петрович</td>
            <td>boris</td>
            <td>преподаватель</td>
            <td>1955-03-25</td>
            <td>borisjjjd@mail.ru</td>
            <td><button>Изменить</button></td>
          </tr>
          <tr>
            <td>Лоскутов Валерий Абрамович</td>
            <td>valeriy</td>
            <td>преподаватель</td>
            <td>1974-03-25</td>
            <td>valeriysd@mail.ru</td>
            <td><button>Изменить</button></td>
          </tr>
          <tr>
            <td>Дмитриев Валентин Константинович</td>
            <td>valentin</td>
            <td>студент</td>
            <td>1992-03-25</td>
            <td>valentinfdf@mail.ru</td>
            <td><button>Изменить</button></td>
          </tr>
          <tr>
            <td>Якина Мария Антоновна</td>
            <td>masha</td>
            <td>студент</td>
            <td>1981-03-30</td>
            <td>mashasdsd@mail.ru</td>
            <td><button>Изменить</button></td>
          </tr>
          <tr>
            <td>Моргунов Александр Романович</td>
            <td>aleksandr</td>
            <td>студент</td>
            <td>1992-03-25</td>
            <td>aleksandrmr@mail.ru</td>
            <td><button>Изменить</button></td>
          </tr>
          <tr>
            <td>Васильев Константин Андреевич</td>
            <td>konstantin</td>
            <td>студент</td>
            <td>1979-08-22</td>
            <td>konstantinvvv@mail.ru</td>
            <td><button>Изменить</button></td>
          </tr>
          <tr>
            <td>Белов Павел Владимирович</td>
            <td>belov</td>
            <td>студент</td>
            <td>1978-03-24</td>
            <td>belovggg@mail.ru</td>
            <td><button>Изменить</button></td>
          </tr>
          <tr>
            <td>Алтынцев Олег Михайлович</td>
            <td>oleg</td>
            <td>студент</td>
            <td>1999-01-05</td>
            <td>olegnpm@mail.ru</td>
            <td><button>Изменить</button></td>
          </tr>
          <tr>
            <td>Шлегель Альберт Львович</td>
            <td>albert</td>
            <td>студент</td>
            <td>1987-05-30</td>
            <td>albertcst@mail.ru</td>
            <td><button>Изменить</button></td>
          </tr>
          <tr>
            <td>Мельник Ангелина Марковна</td>
            <td>angel</td>
            <td>студент</td>
            <td>2000-11-18</td>
            <td>melnikangel@mail.ru</td>
            <td><button>Изменить</button></td>
          </tr>
        </thead>
      </tbody>
    </table>
  );
};

export default UsersTable;