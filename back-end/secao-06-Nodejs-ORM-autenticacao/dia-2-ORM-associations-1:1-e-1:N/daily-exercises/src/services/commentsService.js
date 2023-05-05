const { Comment } = require('../models');

const getCommentsByAccountId = async (id) => {
  const listOfComments = await Comment.findAll({
    where: { accountId: id },
  });

  return listOfComments;
};

// Bonus exercise 2:
const saveComment = async (accountId, message) => {
  const comment = await Comment.create(
    { message, upvoting: 0, downvoting: 0, accountId },
  );

  return comment;
};

module.exports = {
  getCommentsByAccountId,
  saveComment,
};
