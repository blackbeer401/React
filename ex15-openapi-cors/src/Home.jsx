function Home(){

    const clickBtn=()=>{
        //네이버의 코스피지수 페이지 데이터 가져오기
        const url ="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EC%BD%94%EC%8A%A4%ED%94%BC%EC%A7%80%EC%88%98&oquery=%EC%BD%94%EC%8A%A4%ED%94%BC%EC%A7%80%EA%B5%AC&tqi=jCfC3wqXKZGssECzx6o-457760&ackey=gjrp25r3"
        fetch(url).then(res=>res.text()).then(text=>alert(text)).catch(e=>alert(e.message))
        // 해결책
        // 내 서버의 Backend 에게 대신 데이터를 요청하고 그 결과를 받는다.(web수업 day14번에 있다.)
    }

    return(
        <div>
            <h2>OPEN API cors </h2>

            <button onClick={clickBtn}>naver 검색데이터 가져오기 cors 문제가 발생하게된다.</button>

        </div>
    )
}
export default Home