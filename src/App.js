import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [items, setItems] = useState([]); // initial value = empty array
  const [loading, setLoading] = useState(true); //initial value = true

  const removeTour = (id) => {
    const toursUpdate = items.filter((item) => item.id !== id);
    setItems(toursUpdate);
  };

  const getData = async () => {
    try {
      //make request call to api

      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setItems(data);

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
    // console.log(data);
  };

  useEffect(() => {
    //runs only once on the initial render
    getData();
  }, []);

  if (loading) {
    // if true show loading component
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>tours unavailable</h2>
          <button className="btn" onClick={getData}>
            view tours
          </button>
        </div>
      </main>
    );
  }

  return (
    //once we get the data set loading to false and show the data
    //we can also pass a function as a prop
    <main>
      <Tours items={items} removeTour={removeTour} />
    </main>
  );
};

export default App;
