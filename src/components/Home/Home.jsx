import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import className from 'classnames/bind'
import InteractiveButtons from '../InteractiveButtons/InteractiveButtons'
import Terminal from '../Terminal/Terminal'
import HomeDetail from '../HomeDetail/HomeDetail'
import Spinner from '../Shared/Spinner/Spinner'
import styles from './Home.module.scss'

const cx = className.bind(styles)

const Home = () => {
  const history = useHistory()
  const [maximize, setMaximize] = useState(false)
  const [minimize, setMinimize] = useState(false)
  const [open, setOpen] = useState(true)
  const [page] = useState('home')
  const [restart, setRestart] = useState(false)

  const maximizeTerminal = () => setMaximize(true)

  const minimizeTerminal = () => {
    maximize ? setMaximize(false) : setMinimize(true)
  }

  const closeTerminal = () => {
    setOpen(false)
    setMaximize(false)
    if (open && minimize) {
      history.push('/')
      setRestart(true)
      setTimeout(() => {
        setRestart(false)
        window.location.reload()
      }, 1500)
    }
  }

  return (
    <div
      className={cx('home', {
        home__wrapper: !maximize,
        home__wrapper__maximize: maximize,
      })}
    >
      <div className="large-hero">
        <div
          className={cx({
            'home__large-hero__text-content': open,
            'home__large-hero__text-content--closed': !open,
          })}
        >
          <InteractiveButtons
            maximizeTerminal={maximizeTerminal}
            minimizeTerminal={minimizeTerminal}
            closeTerminal={closeTerminal}
            open={open}
            page="home"
          />
          <HomeDetail minimize={minimize} open={open} />
          {restart && (
            <>
              <Spinner />
              <p className={styles['home__text--restart']}>
                Restarting Terminal...
              </p>
            </>
          )}
          <Terminal clear={minimizeTerminal} page={page} openTerminal={open} />
        </div>
      </div>
    </div>
  )
}

export default Home
