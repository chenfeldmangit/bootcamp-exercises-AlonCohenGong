fetch('./js/tweet.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log('dataaaaaaaa',data)
  })
  .catch(err => {
    // Do something for an error here
  })