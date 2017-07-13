// @flow
import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List/List';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import CandidatePosition from './candidatePosition';

import ButtonComponent from '../../../common/buttonComponent';

class InterviewCandidate extends Component {

  renderTextField(type: string, hintText: string, errorText: string, labelText: string) {
      return (
        <TextField
          type={type}
          hintText={hintText}
          //errorText={errorText}
          floatingLabelText={labelText}
        />
      );
    }

  render() {
    const style = {
      width: 250,
      margin: 50,
    };

    return (
      <div style={style}>
        <MuiThemeProvider>
          <List>
            <Subheader style={{paddingLeft: 0}}>Candidate</Subheader>
            <Divider />
            {this.renderTextField('text', 'Name', 'This field is required', 'Name')}
            {this.renderTextField('text', 'Surname', 'This field is required', 'Surname')}
            {this.renderTextField('text', 'Phone', 'Incorrect format', 'Phone')}
            {this.renderTextField('text', 'Email', 'Incorrect format', 'Email')}
            {this.renderTextField('text', 'Skype', 'Incorrect format', 'Skype')}
            <CandidatePosition />
            <ButtonComponent buttonText='Attach CV' />
          </List>         
        </MuiThemeProvider>
      </div>
    )
  }
}

export default InterviewCandidate;
