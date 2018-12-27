import React, { Component } from 'react';
import Title from '../Title/Title';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';

import './Resume.css';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  state = { numPages: 2, pageNumber: 1 };

  render() {
    const { pageNumber } = this.state;

    return (
      <Container>
        <div style={styleDiv}>
          <Title>RESUME</Title>
          <Button href="/resume.pdf" target="_blank">Download</Button>
          <Document
            file="/resume.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
            style={styleDiv}
          >
            <Page
              pageNumber={pageNumber}
              style={styleDiv} />
            <Page
              pageNumber={2}
              style={styleDiv}
              className="pageTwo"
            />
          </Document>
        </div>
      </Container>
    );
  }
}

const styleDiv = {
  width: '100%',
  overflow: 'scroll',
  textAlign: 'center'
}

const Button = styled.a`
  display: inline-block;
  margin: 0 auto;
  border: 1px solid #2cbadb;
  font-size: .8rem;
  color: #2cbadb;
  padding: 8px 12px;
  cursor: pointer;
  transform: translateY(-24%);
  font-family: 'PT Mono', monospace;
  transition: .2s all linear;
  letter-spacing: 1.5px;
  border-radius: 2px;
  background-color: transparent;
`;

const Container = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

export default Resume;