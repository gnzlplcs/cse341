const awesomeFunction = (req, res, next) => {
  res.json("Sample name");
};

const returnAnotherPerson = (req, res, next) => {
  res.json("Patricia Pérez, my wife");
};

module.exports = { awesomeFunction, returnAnotherPerson };
