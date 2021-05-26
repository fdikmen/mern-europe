import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image,Button } from 'semantic-ui-react'

const MovieCard = ({movie}) => (
  <Card>
    <Image src={movie.cover} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{movie.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{movie.year}</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Button.Group size='mini'>
        <Button color='red' icon labelPosition='left'>
          <Icon name='trash alternate' />
          Delete
        </Button>
        <Button as={Link} to={`/movie/${movie.id}`} icon labelPosition='right'>
          Edit
          <Icon name='edit' />
        </Button>
    </Button.Group>
    </Card.Content>
  </Card>
)

export default MovieCard