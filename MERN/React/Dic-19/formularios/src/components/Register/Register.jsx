import { Fragment } from "react";
import { useState } from "react";



const Register = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [submitted, setSubmitted] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const data = {
            user,
            password,
            confirmPassword
        };
        setSubmitted(true);
        console.log(data);

        setUser("");
        setPassword("");
        setConfirmPassword("");
    }

    const formMessage = () => {
        if (!submitted) {
            return "Welcome, please register";
        }
        return "Thanks for registering";
    }

    return (
        <div>
            <h1>{formMessage()}</h1>
            <h2>
                {
                    submitted ?
                        "GENIAL"
                        :
                        "ESPERANDO REGISTRO"
                }
            </h2>
            <form action="#" onSubmit={handleRegister}>

                <div>
                    <label htmlFor="userInput">USER</label>
                    <input
                        type="text"
                        id="userInput"
                        name="usrIpt"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />

                    {
                        (user.length < 4 && user.length > 0) &&

                        <Fragment>
                            <br />
                            <p>User debe tener 4 caracteres minimo</p>
                        </Fragment>
                    }

                </div>
                <div>
                    <label htmlFor="passwordInput">PASSWORD</label>
                    <input
                        type="text"
                        id="passwordInput"
                        name="passIpt"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        password.length > 0 ?
                            password.length < 8 ?
                                <p>minimo 8 caracteres</p>
                                :
                                !password.match(".*[0-9].*") ?
                                    <p>debe tener almenos un numero</p>
                                    :
                                    null
                            : null
                    }
                </div>
                <div>
                    <label htmlFor="confirmPasswordInput">CONFIRM PASSWORD</label>
                    <input
                        type="password"
                        id="confirmPasswordInput"
                        name="confIpt"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {
                        password !== confirmPassword && confirmPassword.length > 0 &&
                        <p>Las contraseñas no coinciden</p>
                    }
                </div>
                <button type="submit">Enviar</button>

                {
                    submitted &&
                    <h2>Finalizado</h2>
                }

            </form>
        </div>
    )
}


export default Register;