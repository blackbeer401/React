// component 라는 클래스는 recat.js 라는 라이브러리에 설계 되어 있으니 
// 이 파일에서 사용하려면 import 해야 한다.
import {Component} from 'react' // .js 는 생략 가능

// 별도의 css 문서를 연결
import './MyApp.css'
// src 폴더 안에 있는 이미지 파일을 불러와서 변수로 만들기  
import paris from './assets/paris.jpg'

// 리액트에서 화면에 구정요소가 되려면 component 라는 클래스를 상속해야 한다.
class MyApp extends Component{// 상속을 통해 component 의 능력(멤버들)을 가지게 됨

    //MyApp 컴포넌트가보여줄 화면을 그리는 기능함수 (이름이 정해져 있음)
    render(){
        //브라우저가 보여줄 글씨를 리턴해주면 표시됨
        // return "Hello My Web app"

        // 태그문 글씨를 출력해 보면? -- 따옴표를 사용하면 그냥 문자열 데이터가 됨 . 태그문을인식하지 못함 그냥 글씨로 보임.. 
        // return "<h2>Hello</h2>"

        // 따옴표 없이 태그문<>을 쓰면?  리액트가 알아서 DOM 객체로 만들어서 화면을 구성해줌

        // return <h2> Hello Webapp</h2>

        // 이런식으로 Js 안에 html 태그문을 같이 사용할수 있도록 만든언어가 JSX 언어 JS + XML[html]

        // 요소 여러개를 표기해 보기 
        // return <h2> hello</h2>
        // <p> error </p>
        // 리턴은 하나의 요소만  가능하다  그렇기에 여러 오소를 감싸는 큰 요소를 만들어서 그안에 여러개의 요소 배치
        // JSX 언어의 특징은, JS 안에 <> 와 같은 태그문을 쓸수 있듯이
        // <> 태그 안에서 JS 의 변수사용이나 함수 호출을 수행 할 수도 있다.

        let name = 'sam'
        let type = "checkbox"// input 요소의 타입

        // 스타일적용해보기  - 별도의 .css문서 만들어 적용


        return(
            //class 지정할때 속성명 class 대신 className 사용을 권장한다 -> 이유는? 자바스크립트에서 class 는 설계도를 말하는 키워드이다보니 오해의 소지가 생길 수있다.
            <div className='wrap'>
                {/* let a = 10 */}
                <h2>hello react jsx</h2>
                <p>한글도 잘 작동한다</p>

                // 이거 주석 안됨 
                
                <p>hello name</p>
                <p>{name}</p>

                {/* XML 영역 안에서 JS 를 사용하는 {} 사용한 이후 JS 스타일의 주석문법을 사용하여 구현 */}

                <input type="text" />
                <input type="radio" />

                {/* 속성값도 JS 변수로 설정 가능  */}
                <input type={type}/>

                {/* JSX 언어는 반드시 end tag 가 잇어야 한다 만약 없애려면 closing tag 를 사용하게 된다. */}
                <hr />

                {/* 이미지 보여주기(별도 수업예정 ) - 맛보기  */}
                {/* src 폴더에서 작업하는 component의 이미지 들은 src 퐁더 안에 위치하는것을 선호함 */}
                {/* 이미지를 사용하려면 import 해야 사용 가능함 */}
                <img src={paris} alt="paris image" />

                
            </div>
        ) 



    }   

} // MyApp class ------------------------------------------------------------------

// 다른 문서  (main.js) 에서 MyApp을 사용하려면 export 해야 한다.

export default MyApp

