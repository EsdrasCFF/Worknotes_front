import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

<<<<<<< HEAD
import placeholderImage from '../../assets/placeholderImage.jpg';
import { api } from '../../services/api';


export function Header() {
  const { signOut, user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImage;
  return (
    <Container>
      <Profile to="/profile" >
        <img src={avatarURL} alt="Foto do usuário" />
=======
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatarPlaceholder.png';

export function Header() {
  const { signOut, user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Profile to="/profile" >
        <img src={avatarURL} alt={`Foto de ${user.name}`} />
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout  onClick={signOut}>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}