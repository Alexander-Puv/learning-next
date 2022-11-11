import { useRouter } from 'next/router'
import React from 'react'
import MainContainer from '../../components/MainContainer';

export default function ({user}) {
    const {query} = useRouter();
    
    return (
        <MainContainer title={user.name} keywords={user.name}>
            <h1>{user.name}</h1>
            <div>User id: {query.id}</div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json();

    return {
        props: {user}
    }
}