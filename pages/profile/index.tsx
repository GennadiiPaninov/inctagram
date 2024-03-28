import { HeadMeta } from "@/shared/components/headMeta/HeadMeta";
import { getLayout } from "@/shared/components/layout/baseLayout/BaseLayout";

const Profile = () => {
  return (
    <>
      <HeadMeta title={"Profile"} />
      <div>Profile</div>
    </>
  );
};

Profile.getLayout = getLayout;
export default Profile;
