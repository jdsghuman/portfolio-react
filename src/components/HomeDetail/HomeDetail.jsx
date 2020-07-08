import React from 'react'
import { Link } from 'react-router-dom'
import className from 'classnames/bind'
import Button from '../Button/Button'
import EmptyTerminal from '../EmptyTerminal/EmptyTerminal'
import styles from './HomeDetail.module.scss'

const cx = className.bind(styles)

const HomeDetail = ({ minimize, open }) => (
  <>
    {!minimize && (
      <>
        <p className={styles.primary__intro}>&#47;&#47; Hi, my name is</p>
        <p className={styles.primary__name}>JD Ghuman</p> <br />
        <p className={styles.primary__description}>
          I build things with software.
        </p>
        <p
          className={cx('primary__detail', {
            'primary__detail--closed': !open,
          })}
        >
          I'm a software engineer based out of Minneapolis, MN and build web
          applications for desktop and mobile.
        </p>
        <Link to="/projects">
          <Button classes="btn btn__home">Projects</Button>
        </Link>
      </>
    )}
    {minimize && open && <EmptyTerminal />}
  </>
)

export default HomeDetail
