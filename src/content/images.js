/**
 *
 * @type {[{image: String, stats: {modern: Number, cluttered: Number}, liked: Boolean}]}
 */
const images = [
  {
    image: require('../images/1.jpg'),
    stats: {
      modern: 1,
      cluttered: 0,
    }
  },
  {
    image: require('../images/2.jpg'),
    stats: {
      modern: 1,
      cluttered: 0.2
    }
  },
  {
    image: require('../images/3.jpg'),
    stats: {
      modern: 0,
      cluttered: 0.7
    }
  },
  {
    image: require('../images/4.jpg'),
    stats: {
      modern: 0,
      cluttered: 0.2
    }
  },
  {
    image: require('../images/5.jpg'),
    stats: {
      cluttered: 1,
      modern: 0.35
    }
  },
  {
    image: require('../images/6.jpg'),
    stats: {
      cluttered: 0,
      modern: 0.65
    }
  },
  {
    image: require('../images/7.jpg'),
    stats: {
      cluttered: 0,
      modern: 1
    }
  },
].reduce((acc, el) => { acc.push(el); let i = Math.floor(Math.random() * (acc.length)); [acc[i], acc[acc.length - 1]] = [acc[acc.length - 1], acc[i]]; return acc; }, []);

export default images;
