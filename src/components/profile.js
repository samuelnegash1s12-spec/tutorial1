import './profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          className="profile-img"
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Profile"
        />

        <h2 className="profile-name">my profile </h2>
        <p className="profile-bio">
          Frontend Developer • React Lover • Creative Mind 🚀
        </p>

        <button className="profile-btn">Follow</button>
      </div>
    </div>
  );
}
