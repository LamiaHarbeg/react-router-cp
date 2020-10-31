import React, { useState } from 'react'
import {Modal, Button} from "react-bootstrap";

const Add =({addMovie}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rate: "",
    trailerUrl: ""
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value , id: Math.random()});
  };

  const handleSubmit = () => {
    if (newMovie.title && newMovie.description && newMovie.posterUrl && newMovie.rate&& newMovie.trailerUrl) {
      addMovie(newMovie);
      setNewMovie({ title: "", description: "", posterUrl: "", rate: "", trailerUrl: ""});
    } else {
      alert("Please fill in all the required fields !!");
    }
  };
    return (
<>
<Button style={{margin:"20px"}} variant="primary" onClick={handleShow}>
        Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input className="title" placeholder="Title" type="text" name="title"  onChange={handleChange} />
   <input className="description" placeholder="description" name="description"  onChange={handleChange} />
   <input className="posterUrl" placeholder="posterUrl" type="url" name="posterUrl"  onChange={handleChange}/>
   <input className="rate" placeholder="rate" name="rate"   onChange={handleChange} />
   <input className="trailerUrl" placeholder="trailerUrl" name="trailerUrl"   onChange={handleChange} />
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            handleSubmit();
            handleClose();
                      }}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
</>

    )
}

export default Add;




















