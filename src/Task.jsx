function Task({name, completed}) {
  return (
    <div className="alert bg-light mt-3">
      {completed?"☑️":""} {name}
    </div>
  );
}

export default Task;
