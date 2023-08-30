import { useState, useEffect } from 'react';

import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { api } from '../../services/api';

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

<<<<<<< HEAD
  function handleTagsSelected(tagName) {
    if(tagName === "all") {
      return setTagsSelected("")
    }
    
    const tagNameExists = tagsSelected.includes(tagName)
=======
  function handleTagSelected(tagName) {
    if(tagName === "all") {
      return setTagsSelected([]);
    }
    const tagNameExists = tagsSelected.includes(tagName);
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580

    if(tagNameExists) {
      const filteredTags = tagsSelected.filter( tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
<<<<<<< HEAD
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
=======
      setTagsSelected(prevState => [...prevState, tagName]);
    }

  }

  function handleDetailsNote(id) {
    navigate(`/details/${id}`)  
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
<<<<<<< HEAD
=======
      
      console.log()
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580

      setTags(response.data)
    }

<<<<<<< HEAD
    fetchTags()
=======
    fetchTags();
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
<<<<<<< HEAD

=======
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
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
<<<<<<< HEAD
            title="Todos"
            onClick={() => handleTagsSelected("all")}
            isActive={tagsSelected.length === 0}
          /> 
        </li>
        {
          tags && tags.map((tag) => (
            <li key={String(tag.id)} >
              <ButtonText
                title={tag.name}
                key={String(tag.id)}
                onClick={() => handleTagsSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
=======
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
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título" 
          icon={FiSearch}
<<<<<<< HEAD
          onChange={e => setSearch(e.target.value)}  
=======
          onChange={e => setSearch(e.target.value)}
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
<<<<<<< HEAD
            notes && notes.map((note) => (
              <Note
                data={note}
                key={note.id}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        
=======
            notes && notes.map( note => (
              <Note 
                key={String(note.id)}
                data={note}
                onClick={() => handleDetailsNote(note.id)}
              />
            ))
          }
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
        </Section>
      </Content>
      
      <NewNote>
        <FiPlus/>
<<<<<<< HEAD
        <Link to="/new">Criar Nota</Link>
=======
        <Link to="/new" > Criar Nota </Link>
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
      </NewNote>

    </Container>
  );
}