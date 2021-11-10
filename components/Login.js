import React,{ useEffect, useState} from 'react'
import {Container} from 'react-bootstrap'
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {

    const { data: session, status } = useSession()
    const isUser = !!session?.user
    useEffect(() => {
        if (status === "loading") return // Do nothing while loading
        if (!isUser) signIn()
    }, [isUser, status])

    return (
        <div>
            <Container className="my-5 py-5 text-center">
            {
            session ?(<button className="btn btn-primary" onClick={() => signOut()}>Log out</button>) : (<></>)
            }
            </Container>
        </div>
    )
}

export default Login
