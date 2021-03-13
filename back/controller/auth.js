

exports.loginUser = (req, res) => {
  const matchEmail = "sazzadmahmud@gmail.com";
  const newPassword = "123456";
  const { email, password } = req.body;
  if (matchEmail === email) {
    if (newPassword === password) {
      res.json({
        success: true,
      });
    }
  } else {
    res.json({
      success: false,
    });
  }
};
