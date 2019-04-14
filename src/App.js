import React, { Component } from 'react';
import faker from 'faker'

import Header from './components/Header'
import HeaderImage from './components/Header-Image'

const user = faker.helpers.contextualCard()
const text = faker.lorem.paragraphs()
  .split('\n')
  .map((line, ind) => <p key={ind}>{line}</p>)

class App extends Component {
  render() {
    return (
      <>
        <main id="main">
          <Header>
            <HeaderImage />
          </Header>

          <div id="tribute-info">{text}</div>

          <a href="#" id="tribute-link" target="_blank">More Info</a>
        </main>
      </>
    );
  }
}

export default App;
