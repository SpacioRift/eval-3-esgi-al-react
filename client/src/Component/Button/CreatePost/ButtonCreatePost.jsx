import './ButtonCreatePost.css';
import CreatePost from '../../Modal/CreatePost/CreatePost.jsx';



export default function ButtonCreatePost() {
    return (
        <div className="container">
            <button className="create-post-button" onClick={() => {
                return (
                    <>
                        <CreatePost />
                    </>
                )}
            }>
                Créer un post
            </button>
        </div>
    );
}