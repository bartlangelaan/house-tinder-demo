
import React, { Component } from 'react';
import images from '../../content/images';
import Results from '../Results';
import { Button } from 'react-toolbox/lib/button';
import styles from './styles.css';
import DraggableCard from 'react-swipe-card/DraggableCard';

class Tinder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: 0,
      containerSize: {
        x: 0,
        y: 0
      }
    };

    this.giveFeedback = this.giveFeedback.bind(this);
    this.setSize = this.setSize.bind(this);
  }

  setSize() {
    const containerSize = {
      x: window.innerWidth * 0.90,
      y: window.innerWidth * 0.90
    };
    this.setState({ containerSize });
  }

  componentDidMount () {
    this.setSize();
    window.addEventListener('resize', this.setSize);
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.setSize);
  }

  giveFeedback(positive) {
    images[this.state.image].liked = positive;
    this.setState({
      image: this.state.image + 1,
    });
  }

  render() {

    let inner;

    const results = <Results />;

    return (
      <div className={`${styles.wrapper} ${images.length == this.state.image ? styles.showResults : null}`}>
        <div className={styles.innerWrapper}>
          <div className={styles.imageContainer}>
            {images.map((img, i) => {
              const active = i >= this.state.image;
              return (
                <div
                  key={i}
                  style={{ zIndex: images.length - i }}
                  className={`${styles.imageWrapper} ${ active ? styles.active : styles.notActive } ${img.liked ? styles.swipeRight : styles.swipeLeft}`}
                >
                  <DraggableCard
                    containerSize={this.state.containerSize}
                    onOutScreenLeft={() => this.giveFeedback(false)}
                    onOutScreenRight={() => this.giveFeedback(true)}
                    onSwipeLeft={() => null}
                    onSwipeRight={() => null}
                  >
                    <div style={{backgroundImage: `url(${img.image})`}} className={styles.image} />
                  </DraggableCard>
                </div>
              )
            })}
          </div>
          <div>
            <Button raised primary onClick={() => this.giveFeedback(false)} className={styles.button}>Dislike</Button>
            <Button raised primary onClick={() => this.giveFeedback(true)} className={styles.button}>Like</Button>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          {results}
        </div>
      </div>
    );
  }
}


export default Tinder;
