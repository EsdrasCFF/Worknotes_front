import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

export function Header() {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Profile to="/profile" >
        <img src="https://github.com/EsdrasCFF.png" alt={`Foto de ${user.name}`} />

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