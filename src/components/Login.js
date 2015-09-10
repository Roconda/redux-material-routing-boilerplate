import React from 'react'
import { connect } from 'react-redux'
import { RaisedButton, TextField } from 'material-ui'
import { login } from '../actions/application'


export default class Login extends React.Component {
  componentDidMount() {
    console.log('login page did mount');
  }

  handleSubmit() {
    this.props.dispatch(login('username', 'password'));
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <TextField style={{flex: 1, width: '80vw', alignSelf: 'center'}} placeholder="Email" floatingLabelText="Email" type="email" />
          <TextField style={{flex: 1, width: '80vw'}} placeholder="Password" floatingLabelText="Password" type="password" />
          <div style={{display: 'flex', flexFlow: 'row', alignItems: 'flex-end'}}>
            <RaisedButton style={{flex: 1, alignSelf: 'flex-end'}} onClick={this.handleSubmit.bind(this)} linkButton={true} secondary={true} label="Login" />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { application } = state;
  return {
    application
  }
}

export default connect(mapStateToProps)(Login);
