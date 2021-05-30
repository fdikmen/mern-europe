import React from 'react'
import { useState,useEffect } from 'react'
import { Button, Image, Form,Input,Message } from 'semantic-ui-react'
import InlineError from './InlineError'
import { Redirect,useParams } from "react-router-dom";

const NewMovieForm = ({addNewMovie,updateMovie,loading,errorText,done,movie,gotMovie}) => {
  const params = useParams() 
  const _id = movie ? movie.id : params.id;
    const[title,setTitle]=useState(movie ? movie.title : '');
    const[cover,setCover]=useState(movie ? movie.cover : '');
    const[error,setError]=useState({});
    const [submitStatus, setSubmitStatus] = useState(false);

    useEffect(() => {
      if (!movie && gotMovie && gotMovie.title) {
        setTitle(gotMovie.title);
      setCover(gotMovie.cover);
      }
    }, [gotMovie]);

    const onFormSubmit = () => {
      const errMessages = {};
      if (!title) {
        errMessages.title = "Title can't be blank.";
      }
      if (!cover) {
        errMessages.cover = "Cover can't be blank.";
      }

      setError(errMessages);
      if (Object.keys(errMessages).length === 0) {
        if (!_id) {
          addNewMovie({ title, cover });
        }
        else{
          updateMovie({ _id,title, cover });
        }
        setSubmitStatus(true);
      }
    };
const formData=  <Form onSubmit={onFormSubmit} loading={loading}>
<Form.Field
  control={Input}
  label="Title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  placeholder="Title"
  error={error.title && { content: error.title }}
/>
<Form.Field
  control={Input}
  label="Cover URL"
  onChange={(e) => setCover(e.target.value)}
  value={cover}
  placeholder="Cover URL"
  error={error.cover && { content: error.cover }}
  required
/>

{/* <Form.Field error={!!error.cover}>
    <label>Cover URL</label>
    <input placeholder='Cover URL' value={cover} onChange={(e)=>setCover(e.target.value)}/>
    {error.cover && <InlineError message={error.cover}/>}
  </Form.Field> */}
<Form.Field>
  <Image src={cover} size="small" />
</Form.Field>
<Button primary type="submit">
  Submit
</Button>
{          
errorText.response &&
<Message negative>
<Message.Header>
  {errorText.response.statusText}
</Message.Header>
</Message>
}

</Form>

   // console.log("t:",title);
   /// console.log("c:",cover);
    return (
    
        <div>
          {done && submitStatus ? <Redirect to="/movies"/> : formData}
        </div>

     
    );
}

export default NewMovieForm