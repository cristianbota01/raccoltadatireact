import React from "react";
import { useRef } from "react";
import "../CSS/Registration.css"
import Middleware from "../middleware";

const Registration = () => {

    const ref1 = useRef()

    const sendReg = () => {
        const form_data = new FormData(ref1.current)
        Middleware.SendRequest(Object.fromEntries(form_data), "POST", "registration").then(json_response => {
            console.log(json_response)
        })
    }

    return (
        <form className="registration-form border" ref={ref1}>
            <h1 className="text-center mt-2">Registrazione</h1>
            <div className="d-flex flex-column justify-content-start align-items-center w-100">
                <div class="form-floating mb-3 w-100">
                    <input type="text" className="w-90 form-control" id="floatingInput" placeholder="Username" />
                    <label for="floatingInput">Username</label>
                </div>
            </div>
        </form>
    )
}

export default Registration