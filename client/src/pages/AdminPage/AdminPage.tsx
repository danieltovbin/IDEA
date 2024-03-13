import { useEffect, useState } from "react";
import { checkIsAdminInDB } from "../../API/Users/usersClientCtrl";
import Navbar from "../../components/NavbarFiled/Navbar";
import AdminHeader from "../../components/AdminPage/AdminHeader";
import AllProjectsDeletable from "../../components/AdminPage/AllProjectsDeleteable";
import UnAuthorizedPage from "../../components/AdminPage/UnAuthorizedPage";
import Loading from "../../components/Helpers/Loading";

const AdminPage = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkIsAdmin = async () => {
      try {
        const { authorized } = await checkIsAdminInDB();
        setIsAdmin(authorized);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    checkIsAdmin();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : isAdmin ? (
        <div>
          <Navbar />
          <AdminHeader />
          <AllProjectsDeletable />
        </div>
      ) : (
        <UnAuthorizedPage />
      )}
    </>
  );
};

export default AdminPage;
