/* eslint-disable no-case-declarations */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './Terminal.css'

const Terminal = ({ clear, history, location, openTerminal, page }) => {
  const [clickedTerminal, setClickedTerminal] = useState(false)
  const [command, setCommand] = useState('')

  const clickTerminal = () => {
    setClickedTerminal(true)
  }

  const iterateHelpCommands = helpCommands => {
    const space = `\u00A0\u00A0\u00A0\u00A0`
    return helpCommands.map(command => `'${command}' ${space}`)
  }

  const outputTerminalResponse = response => {
    const brs = document.querySelector('.terminal__input-border')
    brs.value = ''
    setTimeout(() => {
      const brs = document.querySelector('.terminal__input-border')
      while (brs.firstChild) {
        brs.removeChild(brs.firstChild)
      }
      setCommand(response)
    }, 50)
  }

  const checkHomePath = () =>
    location.pathname !== '/' ? history.push('/') : outputTerminalResponse('')

  const checkStatement = () => {
    const enteredText = document
      .querySelector('.terminal__input-border')
      .value.toLowerCase()

    switch (true) {
      case enteredText.includes('clear'):
        clear()
        document.querySelector('.terminal__input-border').innerHTML = ''
        outputTerminalResponse('')
        break
      case enteredText.includes('whoami'):
        outputTerminalResponse('jdghuman')
        break
      case enteredText.includes('jdghuman'):
        outputTerminalResponse('i am the mind')
        break
      case enteredText.includes('ls'):
        outputTerminalResponse('Home   Projects   About   Resume')
        break
      case enteredText.includes('pwd'):
        outputTerminalResponse('/Users/jdghuman')
        break
      case enteredText.includes('cd home'):
        checkHomePath()
        break
      case enteredText.includes('cd projects'):
        history.push('/projects')
        break
      case enteredText.includes('cd about'):
        history.push('/about')
        break
      case enteredText.includes('cd resume'):
        history.push('/about')
        window.location.replace('https://jdghuman.com/resume.pdf')
        break
      case enteredText.includes('exit'):
        window.location.replace('https://jdghuman.com/exit')
        break
      case enteredText.includes('echo'):
        const echoText = enteredText.replace('echo', '')
        outputTerminalResponse(echoText)
        break
      case enteredText.includes('mkdir'):
        outputTerminalResponse(
          'You do not have permission to run this command.'
        )
        break
      case enteredText.includes('sudo'):
        outputTerminalResponse(
          'You do not have permission to run this command.'
        )
        break
      case enteredText.includes('.com'):
        window.location.replace(`https://${enteredText}`)
        break
      case enteredText.includes('help'):
        const helpCommands = [
          'cd',
          'cd home',
          'cd projects',
          'cd about',
          'cd resume',
          'clear',
          'echo',
          'exit',
          'help',
          'jdghuman',
          'ls',
          'mkdir',
          'pwd',
          'sudo',
          '{url}.com e.g. google.com',
          'whoami',
        ]
        outputTerminalResponse(iterateHelpCommands(helpCommands))

        break
      case enteredText.includes('cd'):
        outputTerminalResponse('>> cd')
        break
      default:
        outputTerminalResponse('-bash: adfa: command not found')
    }
  }

  const keyPressed = e => {
    if (e.key === 'Enter') {
      checkStatement()
    }
  }

  return (
    <div
      className={
        (openTerminal ? 'terminal__container ' : null) +
        (page === 'home' ? 'terminal__home' : '')
      }
      id={`${page === 'about' ? 'terminal__container--about' : ''}`}
      onKeyPress={keyPressed}
      onClick={clickTerminal}
    >
      {openTerminal ? (
        <p
          className={
            page === 'home'
              ? 'terminal__command terminal__command--about'
              : 'terminal__command terminal__command--about'
          }
        >
          {command}
        </p>
      ) : (
        <p />
      )}
      {openTerminal && page === 'home' && (
        <>
          <label
            className={
              !clickedTerminal
                ? 'static-value'
                : 'static-value terminal__blink--clicked'
            }
          >
            >>
          </label>
          <input
            className="terminal__input-border"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck="false"
          />
        </>
      )}
      {openTerminal && page === 'about' && (
        <>
          <label
            className={
              !clickedTerminal
                ? 'static-value'
                : 'static-value terminal__blink--clicked'
            }
          >
            >>
          </label>
          <input
            className="terminal__input-border"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck="false"
          />
        </>
      )}
    </div>
  )
}

export default withRouter(Terminal)
