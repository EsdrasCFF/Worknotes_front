import { Container, Profile } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/EsdrasCFF.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Esdras Castro</strong>
        </div>
      </Profile>
    </Container>
  )
}