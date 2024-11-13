"use client"; 

export default function Create() {
  const onSubmit = (e)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const options = {
      method:'POST', //3번. 
      headers:{
        'Content-Type':'application/json' //2번. 바디로 넘어가는것이 제이슨형식으로
      },
      body:JSON.stringify({title, body}) //1번. 사용자가 입력한 제목과 내용이 title, body를 문자로 바꿔줌

      /*
      GET방식 -> http://localhost:3000/create?title=제목&바디=내용
      POST방식 => title= 제목&바디=내용 /body에 다 숨겨서 나옴
      */
    }
    fetch('http://localhost:9999/topics', options)
    .then(res=>res.json()) //결과를 객체형식으로 object 변환해서 받는다.
    .then(result=>{
      console.log(result);
    })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name="title" placeholder="title" />
        </div>
        <div>
          <textarea name="body" placeholder="content" ></textarea>
        </div>
        <button type="submit">전송</button>
      </form>
      <hr/>
    </div>
  );
}
