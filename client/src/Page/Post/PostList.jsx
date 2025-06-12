import { useEffect, useState } from "react";
import UserCard from "../../Component/PostCard/UserCard";
import "./PostList.css";

export default function PostList() {
    const [postList, setPostList] = useState({ data: [] });
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch('http://localhost:3000/post/' + page, {
            method: "GET",
            headers:{
                authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2YWFzdDJAbXlnZXMuZnIiLCJpZCI6MSwiaWF0IjoxNzQ5NzM1NDY0fQ.T4xO4a19bmcxCWWX4VBOvR6yWBr8FSHNZ7K4KObaqAE"
            }
        })
            .then(result => result.json())
            .then(data => setPostList(data))
    }, [page]);

    function showPageNumber() {
        let dom = "";
        for (let i = 1; i < (postList.count / 20); i++) {
            dom += (
                <button className={i === page ? "active" : ""} onClick={() => setPage(i)}>{i}</button>
            )
        }
        return dom
    }

    return (
        <div className="user-list">
            {
                postList.data.map(user => {
                    return (
                        <UserCard user={user}>
                            <button> Ajouter aux amis</button>
                        </UserCard>
                    )
                }
                )
            }
            <div className="button-page">
                <button className="previous" disabled={page === 1} onClick={() => setPage(page - 1)}>Précédent</button>
                {
                    Array.from({ length: postList.count / 20 }, (_, i) => i).map(e => {
                        return (
                            <button className={e+1 === page ? "active" : ""} onClick={() => setPage(e + 1)}>{e + 1}</button>
                        )
                    })
                }
                <button className="previous" disabled={page * 20 >= postList.count} onClick={() => setPage(page + 1)}>Suivant</button>
            </div>
        </div>
    )
}