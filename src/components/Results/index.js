import React from 'react';
import images from '../../content/images';
import mean from 'lodash.mean';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import styles from './styles.css';

const aspects = {
  modern: 'Klassiek - Modern',
  cluttered: 'Minimalistisch - Druk',
};

function Results() {

  const ratings = Object.keys(aspects).map(aspect => {
    const average = mean(
      images
        .filter(image => typeof image.liked !== 'undefined')
        .filter(image => typeof image.stats[aspect] !== 'undefined')
        .map(image => {
          const photoValue = image.stats[aspect];
          if(image.liked) return photoValue;
          else return 1 - photoValue;
        })
    );

    return (
      <div key={aspect} className={styles.aspectWrapper}>
        <h3>
          {aspects[aspect].split(' - ')[0]}
          <span className={styles.right}>{aspects[aspect].split(' - ')[1]}</span>
        </h3>
        <ProgressBar type="linear" mode="determinate" value={average} max={1} />
      </div>
    )
  });

  return (
    <div className={styles.resultsWrapper}>
      {ratings}
    </div>
  );
}

export default Results;
