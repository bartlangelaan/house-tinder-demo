/**
 *
 * @type {[{image: String, stats: {modern: Number, cluttered: Number}, liked: Boolean}]}
 */
const images = [
  {
    image: require('../images/1.jpg'),
    stats: {
      modern: 1
    }
  },
  {
    image: require('../images/2.jpg'),
    stats: {
      modern: 1
    }
  },
  {
    image: require('../images/3.jpg'),
    stats: {
      modern: 0
    }
  },
  {
    image: require('../images/4.jpg'),
    stats: {
      modern: 0
    }
  },
  {
    image: require('../images/5.jpg'),
    stats: {
      cluttered: 1,
    }
  },
];

export default images;
