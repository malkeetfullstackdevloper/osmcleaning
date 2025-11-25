import { useParams } from "react-router-dom";

const Services = () => {
  const { title } = useParams(); // Get title from URL params

  return (
    <div>
      <h1>{decodeURIComponent(title)}</h1>
    </div>
  );
};

export default Services;
