import UsersTable from "../../components/userstable/UsersTable";
import users from "../../assets/data/users.json";

function UsersPage () {
    return (
        <>
        
        {users.map(item => <UsersTable role ={item.role} firstName ={item.firstName} lastName={item.lastName}
        patronymic={item.patronymic} email={item.email} login={item.login} gender={item.gender}
        birthDate={item.birthDate}/> )}
        </>
    )
}

export default UsersPage;