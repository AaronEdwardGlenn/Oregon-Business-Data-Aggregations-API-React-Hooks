module.exports = (req, res, next) => {
  const err = new Error('Not Found Brah');
  err.status = 404;
  next(err);
};
