import UsersTable from "../../components/userstable/UsersTable";
import users from "../../assets/data/users.json";

function UsersPage () {
    return (
        <>
            <table className='userstable'>
                <thead>
                    <tr>
                        <th>Ф.И.О.</th>
                        <th>Логин</th>
                        <th>Роль</th>
                        <th>Возраст</th>
                        <th>Электронный адрес</th>
                        <th>Управление</th>
                    </tr>
                </thead>
                <tbody>
                        {users.map(item => <UsersTable role ={item.role} firstName ={item.firstName} lastName={item.lastName}
                                                       patronymic={item.patronymic} email={item.email} login={item.login} gender={item.gender}
                                                       birthDate={item.birthDate}/> )}

                </tbody>
            </table>
                </>

    )
}

export default UsersPage;