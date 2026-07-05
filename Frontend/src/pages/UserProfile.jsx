import React from "react";
import { useSelector } from "react-redux";

function UserProfile() {
  let test = useSelector((state) => state.login);
  console.log(test);
  return <div>UserProfile</div>;
}

export default UserProfile;
