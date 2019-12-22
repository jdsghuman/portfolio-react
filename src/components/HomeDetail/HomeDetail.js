import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import EmptyTerminal from '../EmptyTerminal/EmptyTerminal';

const HomeDetail = ({ minimize, open }) => {
    return (
      <>
        {!minimize &&
          <>
            <p className="primary__intro">&#47;&#47; Hi, my name is</p>
            <p className="primary__name">JD Ghuman</p> <br />
            <p className="primary__description">I build things with software.</p>
            <p className={open === true ? 'primary__detail' : 'primary__detail primary__detail--closed'}>I'm a software engineer based out of Minneapolis, MN and build web applications for desktop and mobile.</p>
            <Link to="/projects">
              <Button classes="btn btn__home">Projects</Button>
            </Link>
          </>
        }
        {minimize && open &&
          <EmptyTerminal />
        }
      </>
    )
}

export default HomeDetail;