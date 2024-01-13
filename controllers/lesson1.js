const wendyRoute = (req, res) => {
    res.send('Wendy Chang');
};

const alexRoute =  (req, res) => {
    res.send("Alex Chang");
};
  
const yukiRoute = (req, res) => {
    res.send("Yuki Chang");
};
  
const charityRoute =  (req, res) => {
    res.send("Charity Chang");
  };
  
const graceyRoute =  (req, res) => {
    res.send("Gracey Chang");
  };
  
const lincolnRoute = (req, res) => {
    res.send("Lincoln Chang");
  };

module.exports = {
    wendyRoute,
    alexRoute,
    yukiRoute,
    charityRoute,
    graceyRoute,
    lincolnRoute
};