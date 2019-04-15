import React, { Component } from 'react';

import SiteHeader from './components/SiteHeader'
import HeaderImage from './components/Header-Image'
import FigCaption from './components/Fig-Caption'

class App extends Component {
  render() {
    const awardSource = 'https://en.wikipedia.org/wiki/Linus_Torvalds#Awards_and_achievements'
    const IEEE = <abbr title="Institue of Electrical and Electronics Engineers">IEEE</abbr>

    return (
      <>
        <main id="main" style={{ marginTop: 60 }}>
          <SiteHeader title="Linus Torvalds" subTitle="Person who made the Linux Kernel">
            <HeaderImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Linus-Torvalds_IEEE_Ibuka_Award_2018.jpg/1920px-Linus-Torvalds_IEEE_Ibuka_Award_2018.jpg"
            >
              <FigCaption>Linus Torvalds receiving 2018 IEEE Masaru Ibuka Consumer Electrons Award</FigCaption>
            </HeaderImage>
          </SiteHeader>

          <div id="tribute-info" style={{ margin: '0 1.5rem' }}>
            <blockquote cite="https://en.wikipedia.org/wiki/Linus_Torvalds">
              <p>
                {`
                  The first prototypes of Linux were publicly released later
                  that year (1991). Version 1.0 was released on March 14, 1994.
                `}
              </p>
            </blockquote>


            <blockquote cite={awardSource} style={{ minWidth: 750, overflowX: 'auto' }}>
              <table>
                <caption>Awards and Achievements</caption>
                <thead>
                  <tr>
                    <th>year</th>
                    <th>Award</th>
                    <th>Notes</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{2018}</td>

                    <td>
                      {IEEE}
                      {' Masaru Ibuka Consumer Electronics Award'}
                    </td>

                    <td>
                      {IEEE}
                      {` Masaru Ibuka Consumer Electronics Award is
                        conferred by the Institute of Electrical and Electronics
                        Engineers for outstanding contributions to consumer
                        electronics technology has been named in honor the
                        co-founder and honorary chairman of Sony Corporation,
                        Masaru Ibuka. 2018 Ibuka award was conferred to Linus
                        Torvalds "For his leadership of the development and
                        proliferation of Linux `}
                    </td>
                  </tr>

                  <tr>
                    <td>{2014}</td>

                    <td>
                      {IEEE}
                      {` Computer Pioneer Award`}
                    </td>

                    <td>
                      {`
                          On April 23, 2014, the Institute of Electrical and
                          Electronics Engineers named Torvalds as the 2014
                          recipient of the
                        `}
                      {IEEE}
                      {`
                           Computer Society's Computer Pioneer Award. The
                           Computer Pioneer Award was established in 1981 by
                           the
                        `}
                      {IEEE}
                      {`
                           Computer Society Board of Governors to
                           recognize and honor the vision of those whose
                           efforts resulted in the creation and continued
                           vitality of the computer industry. The award is
                           presented to outstanding individuals whose main
                           contribution to the concepts and development of the
                           computer field was made at least 15 years earlier.
                        `}
                    </td>
                  </tr>
                </tbody>
              </table>
            </blockquote>
          </div>

          <footer>
            <p>
              {`If you have time, you should read more about this incredible
              person on their `}
              <a id="tribute-link" href="https://en.wikipedia.org/wiki/Linus_Torvalds" target="_blank" rel="noreferrer noopener">
                Wikipedia entry
              </a>.
            </p>
          </footer>
        </main>
      </>
    );
  }
}

export default App;
