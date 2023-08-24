import { Container, Links, Content } from './styles';
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { api } from '../../services/api';

export function Details() {
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  async function handleRemove() {
    const confirm = window.confirm("Do you want to delete this note?");

    if(confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/")
    }
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }

    fetchNote();
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
                <Links key={String(link.id)} >
                  <li> <a href={link.url} target="_blank" > {link.url} </a> </li>
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
                  key={String(tag.id)}
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
