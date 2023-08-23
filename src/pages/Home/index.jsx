import { useState, useEffect } from 'react';

import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Link, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';

import { api } from '../../services/api';

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if(tagName === "all") {
      return setTagsSelected([]);
    }
    const tagNameExists = tagsSelected.includes(tagName);

    if(tagNameExists) {
      const filteredTags = tagsSelected.filter( tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }

  }

  function handleDetailsNote(id) {
    navigate(`/details/${id}`)  
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      
      console.log()

      setTags(response.data)
    }

    fetchTags();
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(response.data)
    }

    fetchNotes();
  }, [search, tagsSelected])

  return (
    <Container>

      <Brand>
        <h1> Rocketnotes </h1>
      </Brand>

      <Header/>

      <Menu>
        <li> 
          <ButtonText 
            title="Todos" 
            isActive={tagsSelected.length === 0}
            onClick={() => handleTagSelected("all")}
          /> 
        </li>
        
        {
          tags && tags.map( tag => (
            <li key={String(tag.id)}> 
              <ButtonText 
                title={tag.name} 
                key={String(tag.id)}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              /> 
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título" 
          icon={FiSearch}
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes && notes.map( note => (
              <Note 
                key={String(note.id)}
                data={note}
                onClick={() => handleDetailsNote(note.id)}
              />
            ))
          }
        </Section>
      </Content>
      
      <NewNote>
        <FiPlus/>
        <Link to="/new" > Criar Nota </Link>
      </NewNote>

    </Container>
  );
}