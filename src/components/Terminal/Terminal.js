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
      <div className={this.props.openTerminal ? 'terminal__container' : null} id="terminal__container--about" onKeyPress={this.keyPressed} onClick={this.clickTerminal}>
        {this.state.command && this.props.openTerminal ? <p className={this.props.page === 'home' ? 'terminal__command' : 'terminal__command terminal__command--about'}>{this.state.command}</p> : <p></p>}
        {this.props.openTerminal && this.props.page === 'home' &&
          <><label className={!this.state.clickedTerminal ? 'static-value' : 'static-value terminal__blink--clicked'}>>></label><input id="terminal__input-border" autoComplete="off" autoCapitalize="none" spellCheck="false"></input></>}
        {this.state.showTerminal && <input styles={{ display: 'inline' }} type="text" />}
        {this.props.openTerminal && this.props.page === 'about' &&
          <><label className={!this.state.clickedTerminal ? 'static-value' : 'static-value terminal__blink--clicked'}>>></label><input id="terminal__input-border" autoComplete="off" autoCapitalize="none" spellCheck="false"></input></>}
      </div>
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
    const enteredText = document.querySelector('#terminal__input-border').value.toLowerCase();

    switch (true) {
      case enteredText.includes('clear'):
        this.props.clear();
        document.querySelector('#terminal__input-border').innerHTML = '';
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
      case enteredText.includes('help'):
        const helpCommands = ['cd', 'cd home', 'cd projects', 'cd about', 'cd resume', 'clear', 'echo', 'exit', 'help', 'jdghuman', 'ls', 'mkdir', 'pwd', 'sudo', '{url}.com e.g. google.com', 'whoami'];
        this.outputTerminalResponse(this.iterateHelpCommands(helpCommands));

        break;
      case enteredText.includes('cd'):
        this.outputTerminalResponse('>> cd');
        break;
      default:
        this.outputTerminalResponse('-bash: adfa: command not found');
    }
  };

  outputTerminalResponse = (response) => {
    let brs = document.querySelector('#terminal__input-border');
    brs.value = '';
    setTimeout(() => {
      let brs = document.querySelector('#terminal__input-border');
      while (brs.firstChild) {
        brs.removeChild(brs.firstChild);
      }
      this.setState({ command: response });
    }, 50);
  }

  checkHomePath = () => {
    return this.props.location.pathname !== '/' ? this.props.history.push('/') : this.outputTerminalResponse('');
  }

  iterateHelpCommands = (helpCommands) => {
    const space = `\u00A0\u00A0\u00A0\u00A0`
    return helpCommands.map(command => `'${command}' ${space}`);
  }
}

export default withRouter(Terminal);