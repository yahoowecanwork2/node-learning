function formData(req, res) {
  res.write(`
      <form action="/sumit" method="POST">
        <input type="text" placeholder="name" name="name"></input>
        <input type="email" placeholder="email" name="email"></input>
        <button>summited</button>
      </form>`);
}
module.exports = formData;
