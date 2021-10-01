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

  handleBookCreate = async (bookInfo) =>{
    var newBookInfo = await axios.post(`${server}/books`, bookInfo)
    var bookData = newBookInfo.data
    console.log(bookData);
  }

  loginHandler = (user) => {
    console.log(user)
    this.setState({
      user: user,
    });
  }

  logoutHandler = () => {
    this.setState({
      user: undefined,
    })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <Router>
          <Header />
            <Switch>
              <Route exact path="/">{this.state.user ? ( <BestBooks user={this.state.user} /> ):( <Login user={this.state.user} loginHandler={this.loginHandler} />)} </Route>
              <Route path="/BestBooks">{this.state.user ? (<BestBooks user={this.state.user} onDelete={this.handleDelete} onUpdate={this.handleBookUpdate}/> ):( <Login />)}</Route>
              <Route path="/CreateBook">{this.state.user ? (<CreateBook  handleBookCreate={this.handleBookCreate}/> ) : ( <Login />)}</Route>
              <Route path="/UpdateBook">{this.state.user ? (<UpdateBook onUpdate={this.handleBookUpdate}/> ) : ( <Login />)}</Route>
              <Route exact path="/Profile">{this.state.user ? (<Profile user={this.state.user} logoutHandler={this.logoutHandler}/> ): (<Login />)} </Route>
            </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

