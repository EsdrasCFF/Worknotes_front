import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Links, Content } from './styles';
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { api } from '../../services/api';
<<<<<<< HEAD

export function Details() {
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
=======


export function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580

  async function handleRemove() {
    const confirm = window.confirm("Do you want to delete this note?");

    if(confirm) {
<<<<<<< HEAD
      await api.delete(`/notes/${params.id}`);
      navigate("/")
=======
      await api.delete(`notes/${params.id}`);
      navigate("/");
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
    }
  }

  function handleBack() {
<<<<<<< HEAD
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
=======
    navigate(-1);
  }

  useEffect(()=> {
    async function fetchNotes() {
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }

<<<<<<< HEAD
    fetchNote();
=======
    fetchNotes();
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
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

<<<<<<< HEAD
        { 
          data.links &&
          <Section title="Links úteis">
            {
              data.links.map((link)=> (
                <Links key={String(link.id)} >
                  <li> <a href={link.url} target="_blank" > {link.url} </a> </li>
                </Links>
=======
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
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
              ))
            }
          </Section>
        }

        {
          data.tags &&
          <Section title="Marcadores">
<<<<<<< HEAD
            {
              data.tags.map((tag)=> (
                <Tag 
                  title={tag.name}
                  key={String(tag.id)}
=======
            { 
              data.tags.map((tag)=> (
                <Tag 
                  title={tag.name}
                  key={tag.id}
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
                />
              ))
            }
          </Section>
<<<<<<< HEAD
          
        }

        <Button 
          title="Voltar" 
          onClick={handleBack} 
=======
        }

        <Button 
          title="Voltar"
          onClick={handleBack}
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
        />

      </Content>
    </main>

  </Container>
  )
}
