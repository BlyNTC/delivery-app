import React, { useEffect, useState } from 'react';
import Input from '../components/Inputs';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  function validateEmail(inputEmail) {
    const re = /\S+@\S+\.\S+/;
    return re.test(inputEmail);
  }

  useEffect(() => {
    const NAME_LENGTH = 12;
    const PASSWORD_LENGTH = 6;
    if (name.length >= NAME_LENGTH && validateEmail(email) && password
      .length >= PASSWORD_LENGTH) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password]);

  return (
    <form>
      <h1>Cadastro</h1>
      <Input
        type="text"
        name="Nome"
        placeholder="Digite seu nome"
        testid="common_register__input-name"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
      <Input
        type="email"
        name="Email"
        placeholder="user@email.com"
        testid="common_register__input-email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <Input
        type="password"
        name="Senha"
        placeholder="Digite sua senha"
        testid="common_register__input-password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button 
        type="submit"
        value="Cadastrar"
        disabled={ disabled }
        data-testid="common_register__button-register"
      > Cadastrar </button>
    </form>

  );
}
export default Register;
