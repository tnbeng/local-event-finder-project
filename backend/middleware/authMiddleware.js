// ./middleware/authMiddleware.js
const jwt=require('jsonwebtoken');

module.exports=(req, res, next) => {
  let token;
  
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
    //   req.user = decoded; // Attach the user info to the request
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, token varify failed');
    }
  }
 
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }

};
