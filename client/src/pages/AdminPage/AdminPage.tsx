import React, { useEffect, useState } from "react";
import { checkIsAdminInDB } from "../../API/Users/usersClientCtrl";
import UnAuthorizedPage from "../../components/AdminPage/UnAuthorizedPage";
import Loading from "../../components/Helpers/Loading";
import AllProjectsDeletable from "../../components/AdminPage/AllProjectsDeleteable";
import Navbar from "../../Components/Navbar/Navbar";
import AdminHeader from "../../components/AdminPage/AdminHeader";

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
