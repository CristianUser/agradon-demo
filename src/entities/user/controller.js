const { verifyAuth } = require('agradon');

module.exports = router => {
  router.get('/me', verifyAuth(), (req, res) => {
    res.send(req.user);
  });
};
