import React, { Component } from "react";

class HomeComponent extends Component {

    // 값이 변경되면 자동으로 화면을 갱신해주는 Component 클래스의 아주 특별한 멤버 변수 state
    state = {
        text: '',
        text2: '',
    }

    // 일반 멤버 변수 - 값을 변경해도 화면이 갱신되지 않음
    inputText = ''

    //요소를 참조하는 참조변수
    inputRef = React.createRef()
    pRef = React.createRef()

    render() {
        return (
            <div>
                <h2>React input</h2>
                <p>리액트에서 사용자 입력 받아보기</p>

                {/* 1. 입력될 때마다 콘솔에 출력 */}
                <hr />
                <input type="text" onChange={this.changeText} />

                {/* 2. 입력될 때마다 바로 화면에 출력 */}
                <hr />
                <input type="text" onChange={this.changeText2} />
                <p>입력된 글씨 : {this.state.text}</p>

                {/* 3. 버튼을 눌렀을 때만 화면에 출력 */}
                <hr />
                <input type="text" onChange={this.changeText3} />
                <button onClick={this.clickBtn}>입력완료</button>
                <p>입력이 완료된 글씨 : {this.state.text2}</p>


                <hr />
                {/* 4.요소를 참조하여 제어하는 방식을 react 에서도 제공함 */}
                <input type="text" placeholder="이메일을 입력하세요" ref={this.inputRef}/>
                <button onClick={this.clickBtn2}>입력확인</button>
                <p ref={this.pRef}>입력한 이메일 정보: </p>

                {/*  원래 사용자 입력 데이터는 웹서버로 전송해야한다. form 에 대한 수업이 필요함 수후 수업 예정 */}

            </div>
        )
    }

    // 1. 입력할 때마다 콘솔 출력
    changeText = (event) => {
        console.log("changeText : " + event.target.value)
    }

    // 2. 입력할 때마다 state 변경
    changeText2 = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    // 3. 일반 멤버 변수에 저장
    changeText3 = (event) => {
        this.inputText = event.target.value
    }

    // 버튼 클릭 시 state에 저장
    clickBtn = () => {
        this.setState({
            text2: this.inputText
        })
    }
    // 4)
    clickBtn2 =()=>{
        //inputRef 참조변수가 현재 참조하는 요소의 값을가져와서 
        let value=this.inputRef.current.value
        //pRef참조변수가 현재 참조하는 요소에 쓰기
        this.pRef.current.innerHTML=value
    }

    

}

export default HomeComponent