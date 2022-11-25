import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { db , auth} from "../firebase-config";

import Table from "../Table/tableMain";
import ApiData from "../ApiData";

function Home({isAuth}) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="homePage">
    <ApiData />
    </div>
  );
}

export default Home;
