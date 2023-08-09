import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    updateProfile({ user })
  }

  return (
    <Container>

      <header>
        <a href="/"> 
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/EsdrasCFF.png" alt="Foto do Usuário" />

          <label htmlFor="avatar" >
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome" 
          type="text" 
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        
        <Input 
          placeholder="Senha Atual" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPasswordNew(e.target.value)}
        />
        
        <Input 
          placeholder="Nova Senha" 
          type="password" 
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />
      
        <Button title="Salvar" onClick={handleUpdate} />
      
      </Form>

    </Container>
  );
}