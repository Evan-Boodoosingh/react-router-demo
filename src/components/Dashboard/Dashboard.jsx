import{ Link }from"react-router-dom";


import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Emoji Critic — All About Emojis</h1>
      <p>
        The #1 Destination for Emoji Reviews on the World Wide Web Since 2020!
      </p>
      <Link to="/reviews" className="dashboard-link">
       Click here to see my latest reviews!
      </Link>
      <Link to="/about-me" className="dashboard-link">
       Click here to learn more about me!
      </Link>
      <Link to="/about-us" className="dashboard-link">
       Click here to learn more about us!
      </Link>
    </div>
  );
}

export default Dashboard;
