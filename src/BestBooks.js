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
  let apiURL = 'http://localhost:3003/books';

  try {
    const response = await axios.get (apiURL);
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
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Carousel>
         
         {this.state.books.map((bookdata, index) => 
         <Carousel.Item key={index}> 
          <h1>{bookdata.Title}</h1>  
          <h4>{bookdata.description}
          {bookdata.email}
          {bookdata.status} </h4>
          
        </Carousel.Item>
        )}
        </Carousel>

        {this.state.emptyMessage && <h1>{this.state.emptyMessage}</h1> }
      </>
    )
  }
}

