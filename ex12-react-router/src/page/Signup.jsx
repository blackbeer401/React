import { useLocation } from "react-router-dom"

function Signup(){

    // 페이지가 전환 될 때 state 로 전달된 객체를 받기 - Hook 을 사용해서 
    const location = useLocation()
    return (
        <div>
            <h4>회원가입 페이지</h4>
            {/* location에 전달된 state 값 사용 */}
            <p>이름: {location.state.name}</p>
            <p>나이: {location.state.age}</p>
        </div>
    )
}
export default Signup