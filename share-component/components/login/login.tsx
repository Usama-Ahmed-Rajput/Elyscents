import React from 'react'
import style from './login.module.scss'
const Login = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.logo}>
                        <img src="https://cdn.shopify.com/s/files/1/0569/6185/9665/files/logo_size_ef877e92-6cbf-4198-85b7-7fa0bf6cc89c_200x60@2x.png?v=1703761544.webp" alt="Elyscent Logo" />
                    </div>

                    <div>
                        <h2 className={style.signin}>Sign in</h2>
                        <p className={style.description}>Sign in or create an account</p>
                    </div>

                    <div className={style.signin_btn}>
                        <button>Sign in with shop</button>
                    </div>

                    <div className={style.line}>
                        <div className={style.divider}></div>
                        <span className={style.or}>or</span>
                        <div className={style.divider}></div>
                    </div>

                    <div className={style.email}>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className={style.cnt_btn}>
                        <button>Continue</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
