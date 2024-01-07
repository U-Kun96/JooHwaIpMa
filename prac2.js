const api_Key = 'lhOpwn3M7x6UQcKwJ8IHuRDop80ZLquctsZSm6k0DbLBkeRNZ%2B6cijzQb7JjdeuL%2B%2F%2BW%2B2tA9mMi%2BoNgsdkKLw%3D%3D';
async function getData() {
    const url = `apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?ServiceKey =${api_Key}&searchYearCd=2015&siDo=11&guGun=680&type=json&numOfRows=10&pageNo=1`;
    const response = await fetch(url); 
    const data = response.json();
    
    console.log("data", data);
}
getData();