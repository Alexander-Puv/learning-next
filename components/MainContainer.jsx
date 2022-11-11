import Head from 'next/head'
import React from 'react'
import A from './A'
import s from'../styles/index.module.scss';

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
            <Head>
                <meta keywords={'next.js' + keywords} />
                <title>{title ? title : 'Next app'}</title>
            </Head>
            <div className={s.navbar}>
                <A href='/' text='Main' />
                <A href='/users' text='Users list' />
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer