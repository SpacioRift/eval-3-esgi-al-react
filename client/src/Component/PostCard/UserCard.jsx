import "./UserCard.css";

export default function UserCard({ user }) {
    return (
        <div className="user-card">
            <div className="picture">
                <img src={user.imageUrl} />
            </div>
            <div className="name">
                {user.firstName + " " + user.lastName}
            </div>
            <div className="job">
                {user.jobTitle}
            </div>
            <div className="email">
                {user.email}
            </div>
        </div>
    )
}