class ExampleController {
  index(req, res) {
    return res.json('Hello World');
  }
}

module.exports = new ExampleController();
