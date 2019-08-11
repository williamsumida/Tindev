const Dev = require('../models/dev')

module.exports = {
  async store(req, res) {
    const { user } = req.headers
    const { devId } = req.params

    const loggedDev = await Dev.findById(user)
    const targetDev = await Dev.findById(devId)

    if(!targetDev) {
      // 400 = Bad request
      return res.status(400).json({ error: "Dev doesn't exist." });
    }

    if(targetDev.likes.includes(user)){
      console.log('Deu match!')
    }
    
    loggedDev.likes.push(targetDev._id)

    await loggedDev.save()

    return res.json(loggedDev)
  }
}