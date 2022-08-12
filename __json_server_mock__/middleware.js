module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body.username === 'jack' && req.body.password === '123456') {
      console.log(req)
      return req.status(200).json({
        user: {
          token: '123'
        }
      })
    }else {
      return req.status(400).json({message: '用户名或者密码错误'})
    }
  }
  next()
}
