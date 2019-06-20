import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Terminal.css';

class Terminal extends Component {
  state = {
    clickedTerminal: false,
    command: ''
  }
  render() {
    return (
      <span onKeyPress={this.keyPressed} onClick={this.clickTerminal}>
        {this.state.command ? <p className="terminal__command">{this.state.command}</p> : null}
        {this.props.openTerminal && this.props.page === 'home' &&
          <p id="terminal__border" className={!this.state.clickedTerminal ? 'terminal__blink terminal__blink-home' : 'terminal__blink terminal__blink--clicked terminal__blink-home'}><span contentEditable="true" className="terminal__text--clicked"></span></p>}
        {this.state.showTerminal && <input styles={{ display: 'inline' }} type="text" />}
        {this.props.openTerminal && this.props.page === 'about' &&
          <p id="terminal__border" className={!this.state.clickedTerminal ? 'terminal__blink terminal__blink-about' : 'terminal__blink terminal__blink--clicked terminal__blink-about'}><span contentEditable="true" className="terminal__text--clicked"></span></p>}
      </span>
    )
  }

  clickTerminal = () => {
    this.setState({ clickedTerminal: true });
  }

  keyPressed = (e) => {
    if (e.key === 'Enter') {
      this.checkStatement();
    }
  }

  checkStatement = () => {
    const enteredText = document.querySelector('.terminal__text--clicked').innerHTML.toLowerCase();

    switch (true) {
      case enteredText.includes('clear'):
        this.props.clear();
        document.querySelector('.terminal__text--clicked').innerHTML = '';
        this.outputTerminalResponse('');
        break;
      case enteredText.includes('whoami'):
        this.outputTerminalResponse('jdghuman');
        break;
      case enteredText.includes('jdghuman'):
        this.outputTerminalResponse('i am the mind');
        break;
      case enteredText.includes('ls'):
        this.outputTerminalResponse('Home   Projects   About   Resume');
        break;
      case enteredText.includes('pwd'):
        this.outputTerminalResponse('/Users/jdghuman');
        break;
      case enteredText.includes('cd home'):
        this.checkHomePath();
        break;
      case enteredText.includes('cd projects'):
        this.props.history.push('/projects');
        break;
      case enteredText.includes('cd about'):
        this.props.history.push('/about');
        break;
      case enteredText.includes('cd resume'):
        this.props.history.push('/about');
        window.location.replace("https://jdghuman.com/resume.pdf");
        break;
      case enteredText.includes('exit'):
        window.location.replace("https://jdghuman.com/exit");
        break;
      case enteredText.includes('echo'):
        let echoText = enteredText.replace('echo', '');
        this.outputTerminalResponse(echoText);
        break;
      case enteredText.includes('mkdir'):
        this.outputTerminalResponse('You do not have permission to run this command.');
        break;
      case enteredText.includes('sudo'):
        this.outputTerminalResponse('You do not have permission to run this command.');
        break;
      case enteredText.includes('.com'):
        window.location.replace(`https://${enteredText}`);
        break;
      case enteredText.includes('cd'):
        this.outputTerminalResponse('>> cd');
        break;
      default:
        this.outputTerminalResponse('-bash: adfa: command not found');
    }
  };

  outputTerminalResponse = (response) => {
    setTimeout(() => {
      let brs = document.querySelector('.terminal__text--clicked');
      while (brs.firstChild) {
        brs.removeChild(brs.firstChild);
      }
      this.setState({ command: response });
    }, 50);
  }

  checkHomePath = () => {
    return this.props.location.pathname !== '/' ? this.props.history.push('/') : this.outputTerminalResponse('');
  }
}

export default withRouter(Terminal);