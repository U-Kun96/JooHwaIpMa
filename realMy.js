
// API 연동
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        // 내 API KEY가 입력되어있음.
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgwMmQxNzY4Njk0ZWMwMjY2ZGE4ZWE1ODc2M2Q2ZCIsInN1YiI6IjY1OTNiYTA3ZTY0MGQ2MDIxMWQ1Yzg2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2DMZzXSM4RoqjHShLNYbB_5sVnz9cenF5obq243Sp1s'
    }
};

// API에 연동한 것.
const urlImage = "https://image.tmdb.org/t/p/w500";
const callApi = fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
        let datas = data['results'];
        datas.forEach(a => {

            let title = a['original_title'];
            let overview = a['overview'];
            let rating = a['vote_average'];
            let img = a['poster_path'];

            let temp_html = `<div class="col">
            <div class="myCards">
                <img src='urlImage${img} + id'
                    class="movieCard" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-overview">${overview}</p>
                    <p class="card-vote_average">${rating}</p>
                </div>
            </div>
        </div>`

            document.querySelector('body').innerHTML += temp_html;

        });
        console.log(data);
    });