import { useState } from "react";

export default function Submit() {
  const [names, setNames] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    setNames([...names, name]);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <button type="submit" id="start_server">Submit</button>
    </form>
  );
}
