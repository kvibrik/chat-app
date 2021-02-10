const { auth } = require('firebase-admin');
const admin = require('./admin');

async function verifyToken(token) {
  try {
    const decodedToken = await auth().verifyIdToken(token);
    return decodedToken;
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = {
  verifyToken,
};
