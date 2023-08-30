import { useState } from 'react';
<<<<<<< HEAD
import { useNavigate} from 'react-router-dom';
=======
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580

import { Container, Form  } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { api } from '../../services/api';

import { api } from '../../services/api';

export function New() {
<<<<<<< HEAD
  const [links, setLinks] = useState([]);
=======
  const [links, setlinks] = useState([]);
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
<<<<<<< HEAD
  setLinks(prevState => [...prevState, newLink]);
  setNewLink("")
  }

  function handleRemoveLink(deleted) {
  setLinks(prevState => prevState.filter( link => link !== deleted ))
  }

  function handleAddTag() {
  setTags(prevState => [...prevState, newTag]);
  setNewTag("")
  }

  function handleRemoveTag(deleted) {
  setTags(prevState => prevState.filter( tag => tag !== deleted))
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Title is required to register note!")
    }

    if(!description) {
      return alert("Description is required to register note!")
    }

    if(newLink) {
      return alert("Você deixou um link no campo. Clique em adicionar ou deixe em branco!")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo. Clique em adicionar ou deixe em branco!")
    }

=======
    setlinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setlinks(prevState => prevState.filter( link => link !== deleted ));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter( tag => tag !== deleted));
  }

  async function handleNewNote() {
    if(!title || !description) {
      return alert("Title and description are required!")
    }

    if(newLink) {
      return alert("Has a link0 not added in the field. Click to add or delete.")
    }

    if(newTag) {
      return alert("Has a tag not added in the field. Click to add or delete.")
    }
    
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

<<<<<<< HEAD
    alert("Created note with successfuly!")
    navigate(-1)
  }

  function handleBack() {
    navigate(-1)
=======
    alert("Successfully created note!");
    navigate("/")
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
<<<<<<< HEAD
            <ButtonText onClick={handleBack} title="voltar" />
=======
            <Link to="/">voltar</Link>
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
          </header>
        
          <Input 
            placeholder="Título"
<<<<<<< HEAD
            onChange={e => setTitle(e.target.value)}
=======
            onChange={e => setTitle(e.target.value)}  
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
          />

          <TextArea 
            placeholder="Observações" 
<<<<<<< HEAD
            onChange={e => setDescription(e.target.value)}          
          />

          <Section title="Links úteis">
            {
=======
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            { 
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
<<<<<<< HEAD
          

            <NoteItem
              isNew
              value={newLink}
              placeholder="Novo Link"
=======

            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          
          <Section title="Marcadores">
            <div className='tags'>
<<<<<<< HEAD
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    value={tag}
                    key={String(index)}
                    onClick={() =>  handleRemoveTag(tag)}     
                  />
                ))
              }

              <NoteItem
                isNew
                value={newTag}
                placeholder="Novo marcador"
=======
              { 
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                )) 
              }
              <NoteItem
                isNew
                placeholder="Nova Tag"
                value={newTag}
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          
          <Button 
            title="Salvar"
            onClick={handleNewNote}
          />

        </Form>
      </main>

    </Container>

  );
}