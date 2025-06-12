import { useEffect, useState } from "react";
import "./PostList.css";

export default function PostList() {
    const [postList, setPostList] = useState({ data: [] });
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch('http://localhost:3000/post/' + page, {
            method: "GET",
            headers:{
                authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2YWFzdDJAbXlnZXMuZnIiLCJpZCI6MSwiaWF0IjoxNzQ5NzMxNzIwfQ.ZPrvgq3cX5NEBx8H4B3w6VZwPi9cey5QFmHK4ukujvw"
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
        
    )
}