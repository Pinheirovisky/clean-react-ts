import React from 'react'
import Styles from './login-styles.scss'
import Header from '@/presentation/components/login-header/login-header'
import Spinner from '@/presentation/components/spinner/spinner'
import Footer from '@/presentation/components/footer/footer'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form action="" className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type='email' name='email' placeholder='Digite seu e-mail' />
          <span className={Styles.status}>&#128308;</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type='password' name='password' placeholder='Digite sua senha' />
          <span className={Styles.status}>&#128308;</span>
        </div>
        <button className={Styles.submit} type='submit'>
          <span>Entrar</span>
        </button>
        <a href="/cadastro" data-content="Criar conta" className={Styles.link}>Criar conta</a>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login