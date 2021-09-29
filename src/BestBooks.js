import axios from "axios";
import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[],
      bookAmount: '',

    };

  }

  componentDidMount() {
    this.getBooks();
  }

async getBooks() {
  let bookAPI = 'http://localhost:3003/books';

  try {
    const response = await axios.get (bookAPI);
    const bookData = response.data;
    if(bookData.length > 0) {
    this.setState({ books: bookData});
  } else {
    this.setState({ bookAmount: 'All the books are gone' });
  }} catch (error) {
    console.log('ErRor 404');
  }
}

  render() {
    return (
      <>
        <Carousel>
         {this.state.books ? this.state.books.map((bookdata, index) => (
          <Carousel.Item key={index}> 
          <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/02/17/09/33/fantasy-3159493_960_720.jpg"
          alt={bookdata.Title}
          />
          <Carousel.Caption>
          <h1>{bookdata.Title}</h1>
          <h4>{bookdata.description}</h4>
          <p>{bookdata.status} </p>
          </Carousel.Caption>
        </Carousel.Item>
        )
        ) : <h1>Sorry this book is unavailable! Please search for another.</h1> }
        </Carousel>
      </>
    )
  }
}

