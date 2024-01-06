const API_Key = "lhOpwn3M7x6UQcKwJ8IHuRDop80ZLquctsZSm6k0DbLBkeRNZ%2B6cijzQb7JjdeuL%2B%2F%2BW%2B2tA9mMi%2BoNgsdkKLw%3D%3D";

async function getApi() { //API를 호출하는 함수
    // 데이터를 요청할 주소와 url에 포함할 데이터들을 넣어준다.
    const url = `http://apis.data.go.kr/3740000/suwonEvChrstn/getdatalistserviceKey=${API_Key}&numOfRows=10&pageNo=0&sortKey=chrstnType&filterKey=chrstnType&filterValues=DC콤보&type=Json`
    const response = await fetch(url) // reponse 상수는 url를 가져와주는데 await를 통해서 잠시 텀을 주는데 async와 쌍이다.
    const data = await response.json(); // response에서 json데이테를 가져와서 data라는 상수에 할당해달라.
    console.log("data", data);
}   
getApi(); // 반드시 함수 호출을 해야 함수가 실행이 된다.