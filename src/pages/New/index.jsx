import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

import { Container, Form  } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { api } from '../../services/api';

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
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

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Created note with successfuly!")
    navigate(-1)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText onClick={handleBack} title="voltar" />
          </header>
        
          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}          
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
          

            <NoteItem
              isNew
              value={newLink}
              placeholder="Novo Link"
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          
          <Section title="Marcadores">
            <div className='tags'>
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