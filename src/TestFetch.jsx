import { useEffect, useState } from "react";

const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((json) => setImageURL(json[0].url))
      .catch((error) => {
        setError(error);
        console.error(error);
      });
  }, []);

  if (error) return <p>A network error has occured</p>;

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img src={imageURL} alt={"placeholder text"} />
      </>
    )
  );
};

export default Image;
