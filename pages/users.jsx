import A from '../components/A'
import MainContainer from '../components/MainContainer';

export default function users({users}) {
    return (
        <MainContainer title='Users' keywords='users'>
            <h1>Users list</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}><A href={`/users/${user.id}`} text={user.name} /></li>
                )}
            </ul>
        </MainContainer>
    )
}

export async function getStaticProps(context) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/users`)
    const users = await response.json();

    return {
        props: {users}
    }
}