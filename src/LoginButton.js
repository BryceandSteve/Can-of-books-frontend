import { Component } from 'react'
import Button from "react-bootstrap/Button"
import LoginForm from "./LoginForm"

export default class LoginButton extends Component {

  constructor(props){
    super(props)
      this.state = {
        hide: true,
      }
  }
  


  handleClick = (event) =>{
    this.setState({
      hide: false,
    })
  }

  render() {

    if(this.state.showForm){
      return (
        <>
          <LoginForm loginHandler={this.props.loginHandler}/>
        </>
      )
    } else {
        <p>We would love to have you, but first, 
          we have some stuff for you to fill out!</p>
      return <Button onClick={this.handleClick} type="submit" variant="primary"> Log In</Button>
    }
  }
}
