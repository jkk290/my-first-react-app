import { useState } from 'react';

export function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "Smith", age: 100 });

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  function handleFirstNameChange(e) {
    setPerson({...person, firstName: e.target.value});
  }

  function handleLastNameChange(e) {
    setPerson({...person, lastName: e.target.value});
  }

  const fullName = person.firstName + ' ' + person.lastName;

  return (
    <>
      <label>  
      <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>  
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
