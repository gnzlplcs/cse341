const showName = (req, res, next) => {
  res.json("Gonzalo Palacios");
};

const showAnotherName = (req, res, next) => {
  res.json("Patricia Pérez");
};

module.exports = { showName, showAnotherName };
