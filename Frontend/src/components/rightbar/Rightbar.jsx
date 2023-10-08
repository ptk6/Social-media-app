import "./rightbar.css"
import {Users} from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Rightbar({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDOR
  const [friends,setFriends]=useState([]);
  useEffect(() => {
    const getFriends = async () => {
      try {
        console.log(user);
        const friendList = await axios.get(`/user/friends/${user._id}`);
        setFriends(friendList.data);
      } catch (err) {
        console.error(err);
      }
    };
    if(user)
    getFriends();
  }, [user]); 

  const HomeRightbar=()=>{
    return (
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="Asset/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends </b> have a birthday today
          </span>
        </div>
        <img src="Asset/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key ={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightbar=()=>{
    const displayUser = friends.length > 0 ? friends[0] : user;
    return (
      <>      
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">City:</span>
          <span className="rightbarInfoValue">{displayUser.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">from:</span>
          <span className="rightbarInfoValue">{displayUser.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">Relationship:</span>
          <span className="rightbarInfoValue">{displayUser.relationship ===1?"Single" : displayUser.relationship ===2?"Married":"-"}</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        {friends.map((friend)=>(
        <Link to={"/profile/"+friend.username}>
        <div className="rightbarFollowing">
          <img src={friend.profilePicture ? PF+friend.profilePicture :PF+"Person/noAvatar.png"} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">{friend.username}</span>
        </div>
        </Link>
        ))}
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user?<ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}

// import "./rightbar.css";
// import { Users } from "../../dummyData";
// import Online from "../online/Online";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function Rightbar({ user }) {
//   const PF = process.env.REACT_APP_PUBLIC_FOLDOR;
//   const [friends, setFriends] = useState([]);
//   const [selectedFriend, setSelectedFriend] = useState(null); 
//   useEffect(() => {
//     const getFriends = async () => {
//       try {
//         console.log(user);
//         const friendList = await axios.get(`/user/friends/${user._id}`);
//         setFriends(friendList.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     if (user) getFriends();
//   }, [user]);

//   const handleFriendClick = (friend) => {
//     // Set the selected friend when clicked
//     setSelectedFriend(friend);
//   };


//   const HomeRightbar = () => {
//     return (
//       <>
//         <div className="birthdayContainer">
//           <img className="birthdayImg" src="Asset/gift.png" alt="" />
//           <span className="birthdayText">
//             <b>Pola Foster</b> and <b>3 other friends </b> have a birthday today
//           </span>
//         </div>
//         <img src="Asset/ad.png" alt="" className="rightbarAd" />
//         <h4 className="rightbarTitle">Online Friends</h4>
//         <ul className="rightbarFriendList">
//           {Users.map((u) => (
//             <Online key={u.id} user={u} />
//           ))}
//         </ul>
//       </>
//     );
//   };

//   const ProfileRightbar = () => {
//     // Determine whether to show friend's data or user's data
//     const displayUser = friends.length > 0 ? friends[0] : user;

//     return (
//       <>
//         <h4 className="rightbarTitle">User Information</h4>
//         <div className="rightbarInfo">
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfokey">City:</span>
//             <span className="rightbarInfoValue">{displayUser.city}</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfokey">from:</span>
//             <span className="rightbarInfoValue">{displayUser.from}</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfokey">Relationship:</span>
//             <span className="rightbarInfoValue">
//               {displayUser.relationship === 1
//                 ? "Single"
//                 : displayUser.relationship === 2
//                 ? "Married"
//                 : "-"}
//             </span>
//           </div>
//         </div>
//         <h4 className="rightbarTitle">User Friends</h4>
//         <div className="rightbarFollowings">
//         {friends.map((friend) => (
//             <div
//               className="rightbarFollowing"
//               onClick={() => handleFriendClick(friend)} // Handle friend click
//               key={friend._id}
//             >
//               <img
//                 src={
//                   friend.profilePicture
//                     ? PF + friend.profilePicture
//                     : PF + "Person/noAvatar.png"
//                 }
//                 alt=""
//                 className="rightbarFollowingImg"
//               />
//               <span className="rightbarFollowingName">{friend.username}</span>
//               </div>
//           ))}
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className="rightbar">
//       <div className="rightbarWrapper">
//         {selectedFriend ? (
//           // Display ProfileRightbar for the selected friend
//           <ProfileRightbar />
//         ) : (
//           // Display HomeRightbar if no friend is selected
//           <HomeRightbar />
//         )}
//       </div>
//     </div>
//   );

// }
