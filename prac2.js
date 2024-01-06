const API_Key = "발급된 API키를 적어준다.";

async function getData(){
    const url = url('요청할 data의 url주소와 함께 요청할 것을 확인 후 요청 변수를 적어준 후 값을 함께 적어준다.');
    const response = await fetch(url); // await: 데이터가 올 때까지 기다려라! 그의 짝은 async 함수
    const data = await response.json(); // 요청한 데이터가 담겨있는 respone에서 json 방식의 데이터만 뽑아서 data에 넣어달라.
    console.log("data", data)
}
getData(); // 함수를 호출해야 작동을 하겠지?