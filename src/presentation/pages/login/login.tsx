import React from 'react'
import Styles from './login-styles.scss'
import Footer from '@/presentation/components/footer/footer'
import Header from '@/presentation/components/login-header/login-header'
import Input from '@/presentation/components/input/input'
import FormStatus from '@/presentation/components/form-status/form-status'

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