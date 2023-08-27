import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { api } from '../../services/api';


export function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  async function handleRemove() {
    const confirm = window.confirm("Do you want to delete this note?");

    if(confirm) {
      await api.delete(`notes/${params.id}`);
      navigate("/");
    }
  }

  function handleBack() {
    navigate(-1);
  }

  useEffect(()=> {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }

    fetchNotes();
  }, [])

  return (
  <Container>
    <Header />

    <main>
      <Content>

        <ButtonText 
          title="Excluir nota"
          onClick={handleRemove}
        />

        <h1> {data.title} </h1>

        <p> {data.description} </p>

        {
          data.links && 
          <Section title="Links úteis">
            {
              data.links.map((link)=> (
              <Links key={link.id}>
                <li key={link.id} > 
                  <a href={link.url} target='_blank' > {link.url} </a> 
                </li>
              </Links>
              ))
            }
          </Section>
        }

        {
          data.tags &&
          <Section title="Marcadores">
            { 
              data.tags.map((tag)=> (
                <Tag 
                  title={tag.name}
                  key={tag.id}
                />
              ))
            }
          </Section>
        }

        <Button 
          title="Voltar"
          onClick={handleBack}
        />

      </Content>
    </main>

  </Container>
  )
}
