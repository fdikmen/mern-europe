import React from 'react'
import { useState } from 'react'
import { Button, Image, Form,Input } from 'semantic-ui-react'
import InlineError from './InlineError'


const NewMovieForm = () => {
    const[title,setTitle]=useState('');
    const[cover,setCover]=useState('');
    const[error,setError]=useState({});

    const onFormSubmit=()=>{
        const errMessages={}
        if(!title)
        {errMessages.title="Title can't be blank.";}
        if(!cover)
        {errMessages.cover="Cover can't be blank.";}

        setError(errMessages);
    }

   // console.log("t:",title);
   /// console.log("c:",cover);
    return (
        <Form onSubmit={onFormSubmit}>

    <Form.Field
      control={Input}
      label='Title'
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      placeholder='Title'
      error={error.title &&{content: error.title}}
    />
     <Form.Field
      control={Input}
      label='Cover URL'
      onChange={(e)=>setCover(e.target.value)}
      value={cover}
      placeholder='Cover URL'
      error={error.cover &&{content: error.cover}}
      required
    />
          
          {/* <Form.Field error={!!error.cover}>
            <label>Cover URL</label>
            <input placeholder='Cover URL' value={cover} onChange={(e)=>setCover(e.target.value)}/>
            {error.cover && <InlineError message={error.cover}/>}
          </Form.Field> */}
          <Form.Field>
          <Image src={cover} size='small' />
          </Form.Field>          
          <Button primary type='submit'>Submit</Button>
        </Form>
      )
}

export default NewMovieForm