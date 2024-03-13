
const UnAuthorizedPage = () => {
  return (
    <div>
      <img
        style={{ width: "240px" }}
        src="../../../public/image/IDEA-removebg-preview.png"
        alt="idea"
      />
      <div dir="rtl">
        <h2>
          אופס! <br></br>הדף שחיפשת לא נמצא או שאינך מורשה לגלוש כאן
        </h2>
        <p>לחזרה לדף הבית לחץ</p>
        <a href="/homePage">כאן</a>
        <p style={{ color: "#f4298e", marginTop: "50px" }}>
          “הכוח שלנו לשנות את העתיד נמצא ברגעים הקטנים של ההווה.” – Alice
          Walker.
        </p>
      </div>
    </div>
  );
};

export default UnAuthorizedPage;
