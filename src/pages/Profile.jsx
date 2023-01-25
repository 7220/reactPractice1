export default function Profile(props) {
  const id = props.match.params.id;
  console.log(id, typeof id);
  return (
    <div>
      <h2>Profile page</h2>
      {id && <p>id is {id} </p>}
    </div>
  )
  
}