const Greet = () => {
  const persons = [
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
    {
      id: 1,
      name: "John",
      age: 20,
      color: "black",
    },
    {
      id: 2,
      name: "Doe",
      age: 21,
      color: "white",
    },
  ];

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <table className="table is-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                {persons.map((person) => (
                  <tr>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.color}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greet;
