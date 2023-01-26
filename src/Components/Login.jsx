import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState('');
    const [checkname, setCheckname] = useState(true)
    const [password, setPassword] = useState('');
    const [checkpass, setCheckpass] = useState(true);
    const [check, setCheck] = useState(false);
    const navigate = useNavigate()

    const handleLogin = () => {
        if (username.length > 0 && password.length > 0) {
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('password', password);
            navigate('/home');
        } else if (username.length === 0 && password.length === 0) {
            setCheckname(false);
            setCheckpass(false);
        } else if (username.length === 0) {
            setCheckname(false);
        } else if (password.length === 0) {
            setCheckpass(false);
        } 
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: '#ffffff', borderRadius: 10, borderBottom: '0.2px solid rgba(0,0,0,0.2)' }}>
                <div style={{ margin: 50, display: 'flex', flexDirection: 'column' }}>
                    <form>
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" class={checkname ? "form-control" : "form-control is-invalid"} id="formGroupExampleInput" value={username} required placeholder="Johnathan" onChange={(e) => { setUsername(e.target.value); setCheckname(true) }} />
                            {!checkname && <div class="invalid-feedback">
                                Required
                            </div>}
                        </div>
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <label for="formGroupExampleInput">Password</label>
                            <input type={check ? "text" : "password"} class={checkpass ? "form-control" : "form-control is-invalid"} id="formGroupExampleInput" onChange={(e) => { setPassword(e.target.value); setCheckpass(true) }} />
                            {!checkpass && <div class="invalid-feedback">
                                Required
                            </div>}
                        </div>
                    </form>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={check} onChange={(e) => { setCheck(!check) }} />
                        <label class="form-check-label" for="inlineCheckbox1">Show Password</label>
                    </div>
                    <button type="button" class="btn btn-primary" style={{ marginTop: '3rem', fontWeight: 600 }} onClick={() => handleLogin()}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login