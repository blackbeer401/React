function show(){
    //alert("show")
    // 모듈 JS 쪽에서는 html의 dom을 직접 출력하는 기능 불가하다.
    // DOM 객체를 만들어서 출력해야한다.
    const div = document.createElement('div')
    div.textContent='show'
    document.body.appendChild(div);
    document.write('show')
    // 리액트는 이 DOM 생성을 알아서 해주기에 직접 할 필요는 없다.
    // 개발자는 태그문으로 만들면돤다.
};
// 다른 JS 에서 show 함수를 import 하여 사용하게 하려면 export 해야 한다.
export default show; // 이 문서 안에서 적어도 1개는 export default여야 함.


// 또 다른 함수 정의
export function output(){
    const div = document.createElement('div')
    div.textContent='output'
    document.body.appendChild(div);
}
// 다른 JS 에서 쓰게 하려면 여기서 export 해야한다.
// export output; // default 는 .js 모듈안에 1개만 가능  defalut 가 아닌것은 만들면서 export 해야한다.

// 변수도 export 가능하다 
export let name = 'sam';
export const age = 20;