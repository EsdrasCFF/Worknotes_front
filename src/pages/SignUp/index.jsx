import { useState } from 'react';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
<<<<<<< HEAD

import { useState } from 'react';
=======
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

import { api } from '../../services/api';
<<<<<<< HEAD

export function SignUp() {
  const redirect = useNavigate();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
=======


export function SignUp() {
  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580

  async function handleSignUp() {
    if(!name || !email || !password) {
<<<<<<< HEAD
      return alert("All fields required!")
=======
      return alert("All fields required!");
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
    }

    api.post("/users", {name, email, password})
      .then(() => {
        alert("Successfully registered user!")
<<<<<<< HEAD
        redirect("/")
=======
        navigate("/")
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
<<<<<<< HEAD
          alert("Can't possible user register!")
=======
          alert("Cat'n was possible user register!")
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
        }
      })
  }
  
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua Conta</h2>

        <Input 
            placeholder="Nome" 
            type="text" 
            icon={FiUser}
            onChange={e => setName(e.target.value)}
        />
        
        <Input 
            placeholder="E-mail" 
            type="text" 
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
        />

        <Input 
            placeholder="Senha" 
            type="password" 
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={ handleSignUp } />

        <Link to="/">
          Voltar para o login
        </Link>

      </Form>

    </Container>

  );
}