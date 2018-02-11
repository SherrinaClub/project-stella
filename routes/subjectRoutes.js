const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Subject = mongoose.model('subject');

module.exports = app => {
  app.post('/api/createSubjects', requireLogin, async (req, res) => {
    const {
      originalTitle,
      transTitles,
      description,
      tags,
      author,
      status,
      transor,
      group,
      history
    } = req.body;

    const subject = new Subject({
      originalTitle,
      transTitles,
      description,
      tags,
      author,
      status,
      transor,
      group,
      history,
      _editor: req.user.id
    });

    try {
      await subject.save();

      res.send('Post successfully!');
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
