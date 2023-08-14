import { useState } from 'react'; 

import { Container, Form  } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

export function New() {
  const [links, setlinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink() {
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

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>
        
          <Input placeholder="Título"/>

          <TextArea placeholder="Observações" />

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
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          
          <Section title="Marcadores">
            <div className='tags'>
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
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          
          <Button title="Salvar"/>

        </Form>
      </main>

    </Container>

  );
}