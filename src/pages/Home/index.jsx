import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Container>

      <Brand>
        <h1> Rocketnotes </h1>
      </Brand>

      <Header/>

      <Menu>
        <li> <ButtonText title="Todos" isActive /> </li>
        <li> <ButtonText title="Node"/> </li>
        <li> <ButtonText title="Frontend" /> </li>
        <li> <ButtonText title="React" /> </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
                  title: 'React', 
                  tags: [
                    {id: '1', name: 'React'},
                    {id: '2', name: 'Vite'},
                  ]
                }}
          />
        </Section>
      </Content>
      
      <NewNote>
        <FiPlus/>
        <Link to="/new">Criar Nota</Link>
      </NewNote>

    </Container>
  );
}