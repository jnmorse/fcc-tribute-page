import React, { useState } from 'react';

import SiteHeader from './components/SiteHeader'
import HeaderImage from './components/Header-Image'
import FigCaption from './components/Fig-Caption'
import YouTubeThumbnail from './components/YouTubeThumbnail'

import Modal from './components/Modal'

function App() {
  const [showModal, toggleModal] = useState(false)

  const awardSource = 'https://en.wikipedia.org/wiki/Linus_Torvalds#Awards_and_achievements'
  const IEEE = <abbr title="Institue of Electrical and Electronics Engineers">IEEE</abbr>

  return (
    <>
      <main id="main" style={{ marginTop: 60 }}>
        <SiteHeader title="In Trubute to Linus Torvalds" subTitle="Person who made the Linux Kernel">
          <HeaderImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Linus-Torvalds_IEEE_Ibuka_Award_2018.jpg/1920px-Linus-Torvalds_IEEE_Ibuka_Award_2018.jpg"
          >
            <FigCaption>Linus Torvalds receiving 2018 IEEE Masaru Ibuka Consumer Electrons Award</FigCaption>
          </HeaderImage>
        </SiteHeader>

        <div id="tribute-info" style={{ margin: '0 10vw' }}>
          <blockquote cite="https://en.wikipedia.org/wiki/Linus_Torvalds" style={{ textAlign: 'center' }}>
            <p>
              {`
                The first prototypes of Linux were publicly released later
                that year (1991). Version 1.0 was released on March 14, 1994.
              `}
            </p>
          </blockquote>

          <section>
            <header><h2>Inspiration</h2></header>
            <p>
              Linus Torvalds helped empower what makes the open source community what it is today. Two things he created
              are the daily driver for a lot of developers. Linux the kernal the integral part of what makes most
              distrabution of Linux, and Git the version controll system so many use in development of so many varied
              projects, from web to book writing and many others.
            </p>

            <p>
              It is hard to imagin what today's open source and web would like like without at least having Git and Linux today.
            </p>
          </section>

          <section>
            <header><h2>Interview with Linus Torvalds</h2></header>

            <figure style={{ textAlign: 'center' }}>
              <button style={{
                border: 'none',
                backgroundColor: 'var(--white)',
                cursor: 'pointer'
              }} onClick={() => toggleModal(true)}>
                <YouTubeThumbnail
                  id="pQWj2Fgxdrc"
                  quality={3}
                  width="720"
                  style={{
                    display: 'block',
                    margin: '0 auto',
                    maxWidth: '100%'
                  }}
                />
              </button>
              <figcaption>Linus Torvalds Interview - Oct 22, 2018</figcaption>
            </figure>
          </section>

          <Modal show={showModal} toggleModal={() => toggleModal(false)}>
            <iframe
              style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
              title="YouTubePlayer"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pQWj2Fgxdrc?autoplay=1"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Modal>


          <blockquote cite={awardSource} style={{ overflowX: 'auto' }}>
            <table style={{ minWidth: 720 }}>
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
                    {' '}
                    Masaru Ibuka Consumer Electronics Award
                  </td>

                  <td>
                    IEEE Masaru Ibuka Consumer Electronics Award is conferred by the Institute of Electrical and  
                    Electronics Engineers for outstanding contributions to consumer electronics technology has been 
                    named in honor the co-founder and honorary chairman of Sony Corporation, Masaru Ibuka. 2018 Ibuka 
                    award was conferred to Linus Torvalds "For his leadership of the development and proliferation of
                    Linux
                  </td>
                </tr>

                <tr>
                  <td>{2014}</td>

                  <td>
                    {IEEE}
                    {' '}
                    Computer Pioneer Award
                  </td>

                  <td>
                    On April 23, 2014, the Institute of Electrical and Electronics Engineers named Torvalds as the 2014
                    recipient of the IEEE Computer Society's Computer Pioneer Award. The Computer Pioneer Award was 
                    established in 1981 by the IEEE Computer Society Board of Governors to recognize and honor the
                    vision of those whose efforts resulted in the creation and continued vitality of the computer
                    industry. The award is presented to outstanding individuals whose main contribution to the concepts
                    and development of the computer field was made at least 15 years earlier.
                  </td>
                </tr>

                <tr>
                  <td>2012</td>
                  <td>Internet Hall of Fame</td>
                  <td>
                    On April 23, 2012, at Internet Society's Global INET conference in Geneva, Switzerland, Torvalds was
                    one of the of the inaugural inductees into the Internet Hall of Fame, one of ten in the Innovators
                    category and thirty-three overall inductees.
                  </td>
                </tr>

                <tr>
                  <td>2012</td>
                  <td>Millennium Technology Prize</td>
                  <td>
                    On April 20, 2012, Torvalds was declared one of two winners of that year's Millennium Technology
                    Prize, along with Shinya Yamanaka. The honor is widely described as technology's equivalent of the 
                    Nobel Prize.
                  </td>
                </tr>

                <tr>
                  <td>2010</td>
                  <td>C&C Prize</td>
                  <td>
                    He was awarded the C&C Prize by the NEC Corporation in 2010 for "contributions to the advancement of
                    the information technology industry, education, research, and the improvement of our lives".
                  </td>
                </tr>

                <tr>
                  <td>{2008}</td>
                  <td>{'Hall of Fellows'}</td>
                  <td>
                    In 2008, he was inducted into the Hall of Fellows of the Computer History Museum in Mountain View
                    California, "For the creation of the Linux kernal and the management of open source development of
                    the widely used Linux operating system.
                  </td>
                </tr>

                <tr>
                  <td>{2005}</td>
                  <td>Vollum Award</td>
                  <td>In August 2005, Torvalds received the Vollum Award from Reed College.</td>
                </tr>
              </tbody>
            </table>
          </blockquote>
        </div>

        <footer style={{ padding: '0 10vw' }}>
          <p>
            {`If you have time, you should read more about this incredible person on their `}
            <a id="tribute-link" href="https://en.wikipedia.org/wiki/Linus_Torvalds" target="_blank" rel="noreferrer noopener">
              Wikipedia entry
            </a>.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
