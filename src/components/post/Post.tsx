import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost, fetchPosts } from "../../app/features/postSlice";
import { RootState } from "../../app/store";

const Post = () => {
  const dispatch = useDispatch<any>();
  const store = useSelector((state: RootState) => state?.post?.loading);
  useEffect(() => {
    console.log("store", store);
  }, [store]);

  return (
    <div>
      <h1>Post</h1>
      <button onClick={() => dispatch(fetchPosts())}>
        get Data & set in store{" "}
      </button>
      <button
        onClick={() =>
          dispatch(
            createPost(
              JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1,
              })
            )
          )
        }>
        Create new Post
      </button>
    </div>
  );
};

export default Post;
