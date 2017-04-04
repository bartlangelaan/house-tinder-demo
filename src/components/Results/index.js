import React from 'react';
import images from '../../content/images';
import mean from 'lodash.mean';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import styles from './styles.css';

const aspects = {
  modern: 'Klassiek - Modern'
};

function Results() {

  const ratings = Object.keys(aspects).map(aspect => {
    const average = mean(
      images
        .filter(image => typeof image.liked !== 'undefined')
        .filter(image => image.stats[aspect] !== null)
        .map(image => {
          const photoValue = image.stats[aspect];
          if(image.liked) return photoValue;
          else return 1 - photoValue;
        })
    );

    return (
      <div key={aspect}>
        <h3>
          {aspects[aspect].split(' - ')[0]}
          <span className={styles.right}>{aspects[aspect].split(' - ')[1]}</span>
        </h3>
        <ProgressBar type="linear" mode="determinate" value={average} max={1} />
      </div>
    )
  });

  return (
    <div>
      {ratings}
    </div>
  );
}

export default Results;
