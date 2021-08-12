const axios = require('axios');

// warm up courseIds from 9.0M to 9.4M

const checkCache = async (courseId) => {
  let cached = false;
  await axios.get('http://52.43.214.109/sidebar/all', { params: { courseId } })
    .then((res) => {
      console.log('courseId: ', courseId, '--', res.headers['x-cache']);
      if (res.headers['x-cache'] === 'HIT') {
        cached = true;
      }
    })
    .catch((error) => {
      console.warn('Error occured!!');
      console.warn(error);
    });

  return cached;
};

const warmup = async (min, max) => {
  for (let i = min; i <= max; i += 1) {
    let cached = false;
    while (!cached) {
      cached = await checkCache(i);
    }
  }
};

const minCourseId = 9 * 10 ** 6;
const maxCourseId = 9.4 * 10 ** 6;

warmup(minCourseId, maxCourseId);
