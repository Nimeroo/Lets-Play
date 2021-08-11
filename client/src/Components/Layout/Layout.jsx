import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css"
import React from 'react'

export default function Layout(props) {
    return (
        <div id="layout-container">
            <Header user={props.user} logout={props.logout} />
            {props.children}
            <Footer />
        </div>
    )
}
