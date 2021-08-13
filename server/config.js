module.exports = {
  development: {
    courseContent: 'http://localhost:3003',
    reviews: 'http://localhost:3001',
    author: 'http://localhost:3002',
    sidebar: 'http://localhost:3004',
  },
  production: {
    courseContent: 'http://ec2-3-226-122-223.compute-1.amazonaws.com',
    reviews: 'http://localhost:3001',
    author: 'http://localhost:3002',
    sidebar: 'http://34.212.83.37:3004',
  },
};
