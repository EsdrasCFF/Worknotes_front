import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD

=======
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

<<<<<<< HEAD
import { api } from '../../services/api';

import placeholderImage from '../../assets/placeholderImage.jpg';
=======
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatarPlaceholder.png';

>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580

export function Profile() {
  const { user, updateProfile } = useAuth();
  
<<<<<<< HEAD
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImage;

=======
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

<<<<<<< HEAD
  async function handleUpdate() {
=======
  async function handleUpdateProfile() {
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld 
    };
    
    const userUpdated = Object.assign(user, updated)

<<<<<<< HEAD
=======
    const userUpdated = Object.assign(user, updated);

>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
    await updateProfile({user: userUpdated, avatarFile})
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
<<<<<<< HEAD
    setAvatarFile(file);
=======
    setAvatarFile(file)
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }
<<<<<<< HEAD

=======
  
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>

      <header>
<<<<<<< HEAD
        <button type="button" onClick={handleBack}> 
=======
        <button onClick={handleBack} >
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
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
<<<<<<< HEAD
              type="file"
              onChange={handleChangeAvatar} 
=======
              type="file" 
              onChange={handleChangeAvatar}
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Name"
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
          onChange={e => setPasswordOld(e.target.value)}
        />
        
        <Input 
          placeholder="Nova Senha" 
          type="password" 
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />
      
        <Button title="Salvar" onClick={handleUpdateProfile}/>
      
      </Form>

    </Container>
  );
}