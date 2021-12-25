export default (difficulty) => {
  return fetch(`https://vast-chamber-17969.herokuapp.com/generate?difficulty=${difficulty}`)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.error(err.message);
      return {};
    });
}