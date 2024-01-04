const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgwMmQxNzY4Njk0ZWMwMjY2ZGE4ZWE1ODc2M2Q2ZCIsInN1YiI6IjY1OTNiYTA3ZTY0MGQ2MDIxMWQ1Yzg2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2DMZzXSM4RoqjHShLNYbB_5sVnz9cenF5obq243Sp1s'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));