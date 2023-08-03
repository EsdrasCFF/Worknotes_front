import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

import { api } from "../../services/api";

export function SignUp() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Fill in all fields!");
    }

    api.post("/users", {name, email, password})
      .then(() => {
        alert("User successfully registered!");
        navigate("/");
      })
      .catch( error => {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert("Unable to register!")
        }
      });
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

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
          Voltar para o login
        </Link>

      </Form>

    </Container>

  );
}