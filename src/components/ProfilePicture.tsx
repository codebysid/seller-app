import { user } from "../lib/constants";

const ProfilePicture = () => {
  const { profilePicture } = user;
  return (
    <div className=" border-l border-borderColor pl-8 h-[64px] flex items-center justify-center">
      {profilePicture}
    </div>
  );
};

export default ProfilePicture;
