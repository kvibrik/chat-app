const auth = require('../external-services/firebase/auth');

async function authMiddleware(req, res, next) {
  try {
    const { authorization = '' } = req.headers;
    const [, token] = authorization.split(' ');

    const decodedToken = await auth.verifyToken(token);
    console.log(decodedToken);
    return next();
  } catch (err) {
    return res.status(401).send(err);
  }
}

module.exports = authMiddleware;
