import React from 'react'
import { Link } from 'react-router-dom';
import "../Assets/Css/TanksPage.scss";


export const Page2 = () => {
    return (
        <div className="TanksPageContainer">
        <h1>Terimakasih Sudah Memperbaruhi Data</h1>

        <Link to="/Home">Back To Home </Link>
        </div>
    )
}
