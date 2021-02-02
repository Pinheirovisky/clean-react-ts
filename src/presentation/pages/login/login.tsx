import React from 'react'
import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader as Header } from '@/presentation/components'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form action="" className={Styles.form}>
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='Digite seu e-mail' />
        <Input type='password' name='password' placeholder='Digite sua senha' />
        <button className={Styles.submit} type='submit'>
          <span>Entrar</span>
        </button>
        <a href="/cadastro" data-content="Criar conta" className={Styles.link}>Criar conta</a>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login