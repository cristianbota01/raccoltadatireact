import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className="vw-100 vh-100 bg-light d-flex align-items-center justify-content-center">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Todo App</h1>
                    <p className="lead">Applicazione Todo sviluppata con Node.js, React.js e Bootstrap</p>
                    <div className="container-fluid d-flex justify-content-start p-0">
                        <button onClick={() => (navigate("/registration"))} type="button" className="btn btn-outline-secondary">Registrati</button>
                        <button onClick={() => (navigate("/login"))} type="button" className="btn btn-outline-secondary">Accedi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home