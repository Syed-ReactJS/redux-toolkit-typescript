import { useSelector } from "react-redux";
// import { createPost } from "../../app/features/postSlice";
import { RootState } from "../../app/store";

const Post = () => {
  const store = useSelector((state: RootState) => state);
  console.log("store", store);
  return (
    <div>
      <h1>Post</h1>
      <button>get Data & set in store </button>
    </div>
  );
};

export default Post;
