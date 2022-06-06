var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', (req, res, next)=> {
  console.log(req.query);
  res.send({
    name: 'asdasd',
    age: 13,
    children:{
      aaa: 'asads',
      abc: 'asd',
      ccc: 'ccc'
    }
  });
});

module.exports = router;
