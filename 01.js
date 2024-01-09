
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
// const urlImage = "https://image.tmdb.org/t/p/w500";
const callApi = fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
        let datas = data['results'];
        datas.forEach(a => {

            let title = a['original_title'];
            let overview = a['overview'];
            // Math.trunc() 함수로 소수점 자를 수 있음.
            let rating = a['vote_average'];
            let img = a['poster_path'];
            // 이미지 클릭시 아이디 출력 함수
            let alertId = function(event) {
                event.target.getAttribute(a['id']);
                
            }

            // https://image.tmdb.org/t/p/w500를 변수에 할당을 한 후 img태그에 넣어줬는데 안댐... 해결: 변수를 없애고 그냥 url자체를 넣어버림
            let temp_html = `<div class="col">
            <div class="myCards">
                <img src='https://image.tmdb.org/t/p/w500${img}'
                    class="movieCard" alt="..." onclick="alertId(id)">
                <div class="card-body">
                    <h5 class="card-title">제목<br>${title}</h5>
                    <p class="card-overview">줄거리<br> ${overview}</p>
                    <p class="card-vote_average">평점<br>${rating}</p>
                </div>
            </div>
        </div>`

            // document.querySelcetor로 바디태그를 선택한 뒤 
            document.querySelector('body').innerHTML += temp_html;
        });
        console.log(data);
    });