import { memo, useEffect, useState } from "react"; // Import memo, useEffect, and useState from React
import CardElement from "../../components/Elements/CardElment"; // Import CardElement component
import "./Project.css"; // Import CSS file for styling

// Define type for project data
type ProjectData = {
  project: {
    title: string;
    description: string;
    category: string[];
    items: {
      id: string;
      title: string;
      description: string;
      img: string;
      category: string[];
    }[];
  };
};

const Project: React.FC<ProjectData> = (props) => {
  // State variables to manage projects and categories
  const [projects, setProjects] = useState(props.project.items);
  const [categories, setCategories] = useState<string[]>(["all"]);

  // Function to handle category button click event
  const handleCategoryClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const categoryId = target.id;

    // Toggle active class and update categories state accordingly
    if (!target.classList.contains("active")) {
      setCategories([...categories, categoryId]);
      target.classList.add("active");
    } else {
      const newCategories = categories.filter(
        (category) => category !== categoryId
      );
      setCategories(newCategories);
      target.classList.remove("active");
    }
  };

  // Function to filter projects based on selected categories
  const filterProjects = () => {
    const filteredProjects = props.project.items.filter((project) =>
      categories.some((category) => project.category.includes(category))
    );
    setProjects(filteredProjects);
  };

  // Trigger filterProjects function whenever categories or project items change
  useEffect(filterProjects, [categories, props.project.items]);

  return (
    <section className="project">
      <div className="header">
        <div className="title">{props.project.title}</div>
        <div className="description">{props.project.description}</div>
      </div>
      <div className="project_filter">

        {props.project.category.map((category, counter) => (
          <button
            className={
              category === "all" || category === "الكل" ? "active" : ""
            }
            onClick={handleCategoryClick}
            key={counter}
            id={category}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Render total number of projects */}
      <div className="totle">{projects.length}/{props.project.items.length}</div>
      <div className="project_content">
        {projects.length !== 0 ? (
          projects.map((card, counter) => {
            return <div className="item">
              <CardElement data={card} key={counter} />
              <div className="catogry">
                {card.category.map((category => {
                  if (category !== "all") {
                    return (<button>{category}</button>)
                  } else return null
                }))}
              </div>
            </div>;
          })
        ) : (
          <div className="lodaing"> No Project </div>
        )}
      </div>

    </section>
  );
};

export default memo(Project); // Memoize Project component for performance optimization
