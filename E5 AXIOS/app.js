document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

document.getElementById('button4').addEventListener('click', postData);
// axios.defaults.baseURL = 'https://randomuser.me/api';

// Get local text file data
function getText() {
  axios.get('test.txt')
    .then(function(res){
      console.log(res)
      document.getElementById('output').innerHTML = res.data;
    })
    .catch(function(err){
      console.log(err);
    });
}

// Get local json data
function getJson() {
  axios.get('posts.json')
    .then(function(res){
      console.log(res.data);
      let output = '';
      res.data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}

// Get from external API
function getExternal() {
  axios.get('https://randomuser.me/api/?results=10')
    .then(function(res){
      console.log(res.data);
      let output = '';
      res.data.results.forEach(function(user) {
        output += `<li>${user.email}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}

function postData() {
  axios.post('http://jsonplaceholder.typicode.com/posts', {
    userId: '1',
    title: 'postTitle',
    completed: true
  })
  .then(function(response) {
  console.log(response);
  let output = '';
  output = `<h4>Result</h4>
    <p>Status: ${response.status} ${response.statusText}</p>
    <p>Headers:</p>
    <pre>${JSON.stringify(response.headers, null, '\t')}</pre>
    <p>Data:</p>
    <pre>${JSON.stringify(response.data, null, '\t')}</pre>`;
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}