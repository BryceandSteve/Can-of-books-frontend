import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import CreateBook from './BookFormModal'
import BestBooks from './BestBooks'
import UpdateBook from './Updatebook'
import Login from './Login'
import Profile from './Profile'
// import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



const server = process.env.REACT_APP_SERVER
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    }
  }

  async getBooks() {
    let bookAPI = `${server}/books`
    if(this.props.user.email){ 
      bookAPI += `?email=${this.props.user.email}`
    } try {
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

  handleBookCreate = async (bookInfo) =>{
    var newBookInfo = await axios.post(`${server}/books`, bookInfo)
    var bookData = newBookInfo.data
    console.log(bookData);
  }

  loginHandler = (event) => {
    event.preventDefault()
    this.setState({
      user: true,
    });
  }

  logoutHandler = () => {
    this.setState({
      user: undefined,
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
          <Header />
            <Switch>
              <Route exact path="/">{this.state.user ? ( <BestBooks user={this.state.user} /> ):( <Login user={this.state.user} loginHandler={this.loginHandler} />)} </Route>
              <Route exact path="/BestBooks">{this.state.user ? (<BestBooks onDelete={this.handleDelete} getBooks={this.getBooks}/> ):( <Login />)}</Route>
              <Route path="/CreateBook">{this.state.user ? <CreateBook  handleBookCreate={this.handleBookCreate}/> : <Login />}</Route>
              <Route path="/UpdateBook">{this.state.user ? <UpdateBook onUpdate={this.handleBookUpdate}/> : <Login />}</Route>
              <Route path="/profile">{this.state.user ? (<Profile user={this.state.user} logoutHandler={this.logoutHandler}/> ): (<Login />)} </Route>
            </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

