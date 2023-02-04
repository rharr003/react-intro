const Person = (props) => {
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>{props.name.slice(0, 6)}</p>
      <p>{props.age}</p>
      <h3>{props.age >= 18 ? "Go vote!" : "you must be 18"}</h3>
      <ul>
        {props.hobbies.map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
    </div>
  );
};

export default Person;
