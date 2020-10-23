import React, { Component } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import API from "../../utils/API"

class Search extends Component {

  getFav = () => {
    API. getFavBooks().then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err))
  }
    
render () {
    return (
      <div>
          <h1>Fav for book</h1>
        
          <Card>
{this.state.bookRes.map((book) => {
  return (
    <div>
      <ul>
        <li>
          <Card>
          <Card.Img style={{ width: '8rem', height: '8rem' }}     
     src={book.pic} /> 
    <Card.Title>{book.name}</Card.Title>      
   <Card.Body>{book.descript}</Card.Body>
   <Button 
   id={book.id}
   onClick={(event) => this.postFav(event)}
   variant="primary">Fav</Button>
          </Card>        
        </li>      
      </ul>
      <br />
    </div>    
  )
})}
</Card>

</div>
     
    )
  }
}
    

export default Search;

