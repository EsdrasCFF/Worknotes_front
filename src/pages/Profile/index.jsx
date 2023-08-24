import { useNavigate } from 'react-router-dom';

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from '../../services/api';

import placeholderImage from '../../assets/placeholderImage.jpg';

export function Profile() {
  const { user, updateProfile } = useAuth();
  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImage;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld 
    }

    await updateProfile({user, avatarFile})
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>

      <header>
        <button type="button" onClick={handleBack}> 
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do Usuário" />

          <label htmlFor="avatar" >
            <FiCamera />
            <input 
              id="avatar" 
              type="file"
              onChange={handleChangeAvatar} 
            />
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
      
        <Button title="Salvar" onClick={ handleUpdate } />
      
      </Form>

    </Container>
  );
}