import axios from "axios";
import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
var server = process.env.REACT_APP_SERVER;

export default class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookAmount: "",
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    let bookAPI = `${server}/books/`;
    console.log(this.props.user);
    if (this.props.user.Email) {
      bookAPI += `?email=${this.props.user.Email}`;
    }
    try {
      const response = await axios.get(bookAPI);
      const bookData = response.data;
      if (bookData.length > 0) {
        this.setState({ books: bookData });
      } else {
        this.setState({ bookAmount: "All the books are gone" });
      }
    } catch (error) {
      console.log("ErRor 404");
    }
  };

  render() {
    return (
      <>
        <Carousel>
          {this.state.books ? (
            this.state.books.map((bookdata, index) => (
              <Carousel.Item key={index}>
                <Book info={bookdata} getBooks={this.getBooks} />
              </Carousel.Item>
            ))
          ) : (
            <h1>Sorry this book is unavailable! Please search for another.</h1>
          )}
        </Carousel>
      </>
    );
  }
}

class Book extends Component {
  handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`${server}/books/${id}`);
    this.props.getBooks();
  };

  render() {
    console.log(this.props.info._id)
    return (
      <>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/02/17/09/33/fantasy-3159493_960_720.jpg"
          alt={this.props.info.title}
        />
        <Carousel.Caption>
          <h1>{this.props.info.title}</h1>
          <h4>{this.props.info.description}</h4>
          <Button
            variant="danger"
            onClick={() => this.handleDelete(this.props.info._id)}
          >
            Delete
          </Button>
          {/* <Button
            variant="warning"
            onClick={() => this.props.handleUpdateBook(this.props.info._id)}
          >
            Update
          </Button> */}
        </Carousel.Caption>
      </>
    );
  }
}
