module.exports = (req, res, next) => {
  const err = new Error('Not At All Found');
  err.status = 404;
  next(err);
};
