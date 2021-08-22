import styles from './Home.module.scss';
import React from 'react';
import Layout from '../../Containers/Layout';
import { Link } from 'react-router-dom';
import firstphoto from '../../Media/girlpc.png';
import secondphoto from '../../Media/design.png';
import thirdphoto from '../../Media/dev.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  AOS.init({ duration: 2500 });
  return (
    <Layout>
      <div className={styles.homeContainer}>
        <div className={styles.firstChild}>
          <div className={styles.firstColumn}>
            <h1>Hi,</h1>
            <p>
              I'm a Frontend Developer based in Bucharest, Romania. I have a great passion for the web domain. I love working on complex and beautiful projects.
            </p>
          </div>
          <div className={styles.secondColumn}>
            <img alt={'firstphoto'} src={firstphoto} data-aos='fade-down-left' data-aos-anchor-easing='ease-in-out' data-aos-offset='0' />
          </div>
        </div>

        <div className={styles.secondChild}>
          <h1>What I do</h1>
          <div className={styles.firstLine}>
            <div className={styles.firstColumn}>
              <h2>Design what you wish</h2>
              <p>
                I'm a Frontend Developer based in Bucharest, Romania. I have a great passion for the web domain. I love working on complex and beautiful projects.
              </p>
            </div>

            <div className={styles.secondColumn} data-aos='fade-left' data-aos-anchor-easing='ease-in' data-aos-delay='50' data-aos-offset='300'>
              <img alt={'secondphoto'} src={secondphoto} />
            </div>
          </div>
          <div className={styles.secondLine}>
            <div className={styles.secondColumn} data-aos='fade-right' data-aos-anchor-easing='ease-in' data-aos-delay='50' data-aos-offset='300'>
              <img alt={'thirdphoto'} src={thirdphoto} />
            </div>
            <div className={styles.firstColumn} >
              <h2>Develop what you want</h2>
              <p>
                I'm a Frontend Developer based in Bucharest, Romania. I have a great passion for the web domain. I love working on complex and beautiful projects.
              </p>
            </div>
            {/* <div className={styles.secondColumnMobile} data-aos='fade-right' data-aos-anchor-easing='ease-in' data-aos-delay='50' data-aos-offset='300'>
              <img alt={'thirdphoto'} src={thirdphoto} />
            </div> */}
          </div>
        </div>
        <div className={styles.thirdChild} data-aos="flip-left" data-aos-anchor-easing='ease-in' data-aos-delay='50' data-aos-offset='300'>
          <h1>We can work together</h1>
          <div className={styles.firstLine}>
            <div className={styles.firstColumn}>
              <p>
                See also <Link to="/projects">projects</Link> and <Link to="/resume">resume</Link>.
              </p>
              <p>
                <Link to="/contact">Contact</Link> me if you want to work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout >

  );
}
export default Home;