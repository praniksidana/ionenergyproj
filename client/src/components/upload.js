import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import axios, { post } from 'axios';

class upload extends Component {
    constructor() {
        super();
        this.state = {
          file: null
        };
      }
      
render() {
    return(
        <Container>
            <input type="file" name="file" onChange={
                this.onChangeHandler=event=>{
                this.file=event.target.files[0]
                // console.log(event.target.files[0])
              }
            }/>
            <Button
            color="dark"
            onClick={
                this.onClickHandler=event=>{
                    const data = new FormData() 
                    data.append('file', this.file)
                    axios.post(" http://localhost:5000/", data, {})
                    .then(res => { // then print response status
                        console.log(res.statusText)
                    })
                    console.log(this.file)
                }
            }
            style={{marginBottom: '2rem'}}>Add item</Button>
        </Container>
    );
}
}

export default upload;