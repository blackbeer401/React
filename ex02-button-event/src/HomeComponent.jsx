// React 기능과 Component 클래스를 사용하기 위해 import 
import React, {Component} from 'react'
// react 는 Component 능력을 가진 녀석이 화면의 구성요소가 될 수 있음.
class HomeComponent extends Component{
    //컴포넌트가 보여줄 화면구성을 리턴해주는 기능함수
    // 이 영역은 멤버변수 class 안에 있는 멤버 변수
    //  일반 멤버변수
    name= 'sam'
    // 겂이 변경되면 react가 자동으로 화면을 갱신해주는 Component 클래스의 아주 특별한 멤버변수
    // state 로 관리될 변수가 여러개 일수 있어서 객체로 저장한다.
    state= {
        name:'park',
        age:20
    }

    render(){
        return(
            <div>
                <h2>React Button Click Event</h2>

                {/* 버튼 클릭 이벤트 처리 */}
                {/* html 과 약간 다른 방법 -> 함수의 이름만 쓰고 호출 하면 안된다. -> 마치 함수를 등록해 놓은느낌 */}
                {/* 내식대로 이해 하면 함수를 등록해 놓고 저 함수를 새로 정의하면서 호출까지 해버리는느낌? */}

                <button onClick={aaa}>눌러주세요</button>
                {/* 위처럼 클릭 이벤트에 반응 하는 함수를 HomeComponent 클래스 밖에 놓는것은 좋지 않음 */}
                {/* 그래서 반응 하는 함수도 가급적이면 클래스 영역 안에{} method로 만들어 등록하는게 좋다 */}
                {/* 멤버를 지칭 할 때는 this 키워드가 필요하다 */}
                <button onClick={this.bbb}>눌러주세요</button>
                <button onClick={this.ccc}>눌러주세요</button>
                <button onClick={this.ddd}>눌러주세요</button>  
                {/*  화살표 함수로 실행할 코드가 길지 않다면 별도로 만들지 않고 이자리에서 바로 적용 */}
                <button onClick={()=>alert('화살표')}>한번더 눌러주세요</button>

                <hr />

                {/*  버튼 눌러서 다른 요소의 글씨를 변경하겟음 */}

                <p>이름 : {this.name}</p>
                <button onClick={this.changeName}>robin 으로 이름변경</button>
                <button onClick={this.changeName2}>robin 으로 이름변경</button>

                <hr />
                {/* state 변수를 활용하여 데이터를 변경해보기 */}
                <p>이름: {this.state.name}</p>
                <button onClick={this.changeName3}>이름변경</button>
                {/* state.age 정보 표기하고 변경 */}
                <p>나이:{this.state.age}</p>
                <button onClick={this.changeAge}>나이변경</button>
                <button onClick={this.increaseAge}>나이값 1증가</button>


            </div>
        )
    }// render 함수영역---------------
    // react 에서 이벤트 처리용 함수는 무조건 화살표함수로 써야한다. 
    changeName3 = ()=>{
        // state 변수의 값 변경은 무조건 setstate()라는 함수를 이용해야만 갱신됨
        this.setState({name:'hong'})
    }
    changeAge=()=>{
        // state 값의 변경은 반드시 setState 를 황용해야한다.
        this.setState({age:24})
    }
    increaseAge=()=>{
        this.setState({age:this.setState.age+1})
    }

    
    changeName2 = () => {
        this.name = 'robin';
        // 변수를 바꾸었다고 해서 화면을 다시 갱신해주지 않기에 이대로는 변경되지 않는다.
        // 그렇기에 화면을 다시그리라는 명령어를 실행해 줘야함
        this.forceUpdate()
        // 이렇게 갱신하고 명령하는것도 짜증 나니 알아서 갱신되었으면 한다면?
        // 값이 변경되었을때 자동으로 화면이 갱신되는 특병한 변수(state)를 활용한다.


     }


    // 이름변경 버튼 클릭했을때 실행될 멤버함수
    changeName = function(){
        // 기존방식과는 완전 다른 방식으로 요소의 글씨를 변경 
        // 요소가 변수의 값을 보여주고 클릭 되었을때 요소를 찾지 않고 변수값만 변경하면
        // 그 변수를 보여주는 요소의 글씨가 변경되니 보여지는글씨도 변경된다 이것이 데이터바인딩 기법
        this.name = 'robin' //error 난다 
        // 이유는 익명함수도 객체가 될수 있기에  this.name을 HomeComponent 가 아니라
        // 본인을 changeName 함수 객체의 멤버인줄오해한다.
        // 그래서 this키워드의 영향을 받지 안ㄹ으려면 
        // 화살표 함수를 써야한다. 화살표 함수는 객체가 되지 않는 함수임.
        
    }



    // es6 에서 도입된 화살표 함수 : arrow function (react 에서 꼭 이걸 활용해라)
    ddd = ()=>{
        alert('화살표함수')
    }


    //  함수를 정의하는 또 다른 방법 : 익명함수
    ccc=function(){
        alert('익명함수')
    }


    // 멤버 영역 - 클릭이벤트에 반응하는 함수 (method) 만들기
    bbb(){
        alert('bbb function' );
    }

}//HomeComponrnt ------------------------------------

// main.jsx 에서 사용하도록 export하기
export default HomeComponent

// 1번실습) 버튼 클릭시 반응 하는 함 수 만들기
function aaa(){
    alert('click')
}