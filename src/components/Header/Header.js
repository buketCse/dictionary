import React from 'react'
import './header.scss'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header(props){
    return <div className="header-dict">
        <div className="header-welcome h-100 d-inline-flex align-items-center ">
        <Button type="button" variant='light'>Username</Button>
        </div>
        <div className="header-buttons h-100 d-inline-flex align-items-center ">
            <Button type="button" variant='dark'>Languages</Button>
            <Button type="button" variant='dark'>Vocabulary Lists</Button>
            <Button type="button" variant='success'>Start Learning</Button>
        </div>
    </div>
}