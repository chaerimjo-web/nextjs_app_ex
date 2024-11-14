export default async function Read(props) {
  const response = await fetch(`http://localhost:9999/topics/${props.params.id}`); //기다리는 함수
  const topic = await response.json();

  return (
    <div>
      <h2>
        {topic.title}
      </h2>
      {/* <p>parameter: {props.params.id}</p>  */}
      {/* 넘어온 숫자 /  */}
      <p>{topic.body}</p>
    </div>
  );
}
