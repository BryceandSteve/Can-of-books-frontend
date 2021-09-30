import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import CreateBook from './BookFormModal'
import BestBooks from './BestBooks'
// import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';


const server = process.env.REACT_APP_SERVER
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: false,
    }
  }

handleBookCreate = async (bookInfo) =>{
  var newBookInfo = await axios.post(`${server}/books`, bookInfo)
  var bookData = newBookInfo.data
  console.log(bookData);
  // this.setState({
    
  // })
}

  loginHandler = (event) => {
    event.preventDefault()
    this.setState({
      user: true,
    });
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  handleDelete = async (id, email) => {
    console.log(id);
    await axios.delete('http://localhost:3003/books/' + id + '/?email=' + email);
    this.getBooks();
  }

  getBooks = async () => {
    let booksResponse = await axios.get('http://localhost:3003/books');
    let bookData = booksResponse.data;
    this.setState({ books: bookData });
  };

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />

          <Switch>
            <Route exact path="/">
              <BestBooks handleDelete={this.handleDelete} />
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route path="/bookForm"> <CreateBook onCreate={this.handleBookCreate}/></Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}


