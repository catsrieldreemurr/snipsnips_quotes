const { clerkClient } = require("@clerk/express")

exports.getUserList = async (req, res, next) => {
  const { data: users, totalCount } = await clerkClient.users.getUserList();

  res.json({
    userList: users
  })
}