import React, { Component } from 'react';
import Title from '../Title/Title';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import Button from '../Button/Button';

import './Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  state = { numPages: 2, pageNumber: 1 };

  render() {
    const { pageNumber } = this.state;

    return (
      <Container>
        <div style={styleDiv}>
          <Title>RESUME</Title>
          <a style={{color: '#2cbadb'}} href="/resume.pdf"><Button classes="btn btn__project btn__resume">Download</Button></a>
          <Document
            file="/resume.pdf"
            // onLoadSuccess={this.onDocumentLoadSuccess}
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

const Container = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

export default Resume;