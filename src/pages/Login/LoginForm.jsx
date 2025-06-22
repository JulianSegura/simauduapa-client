import React from "react";
import './Login.css'
import withRouter from 'Common/withRouter';

const LoginForm = () => {
    return (
        <div className="login-container">
            {/* Panel Izquierdo*/}
            <div className="left-panel">
                 <img src="../../../public/logo-uapa-social.webp"/>
            </div>

            {/* Panel Derecho */}
            <div className="right-panel">
                <div className="login-card">
                    <div className="card-content">
                        <h2>Bienvenido</h2>
                        <p className="subtitle">Inicie sesión</p>
                        <form className="login-form">
                            <div className="form-group">
                                <label htmlFor="username" className="form-label">Usuario</label>
                                <input id="username" type="email" defaultValue="admin@themesbrand.com" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <div className="password-input-wrapper">
                                    <input id="password" type="password" defaultValue="123456" required className="form-input" />
                                    <span className="toggle-password-visibility">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="forgot-password">
                                    <a href="#">Olvidaste tu contraseña?</a>
                                </div>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember" className="form-label">Recuerdame</label>
                            </div>
                            <button type="submit" className="main-button">Iniciar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(LoginForm);