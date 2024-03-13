import { FC, useEffect, useState } from "react";
import { deleteProject } from "../../API/Projects/projectClientCtrl";
import "./deletePopupStyle.scss";

const DeletePopup: FC<{
  visible: boolean;
  project: Project | null;
  onClose: () => void;
}> = ({ visible, project, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);

  const handleDeleteProject = async () => {
    if (project && isVisible && project._id) {
      deleteProject(project._id);
    }
    onClose();
  };

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  useEffect(() => {
    visible = isVisible;
  }, [isVisible]);


  return (
    <div>
      {isVisible && project ? (
        <>
          <div dir="rtl" className="deletePopupCont">
            <div className="deletePopupDiv">
              <h2>{`האם אתה בטוח שברצונך למחוק את הפרוייקט: ${project.projectName}`}</h2>
              <h4>בעלים: {project.ownerInfo? project.ownerInfo .ownerName : "Unknown owner"}</h4>
              <p>בלחיצה על "מחק" הפרוייקט ימחק לצמיתות</p>
              <div className="btns">
                <button className="deleteBtn" onClick={handleDeleteProject}>
                  מחק
                </button>
                <button
                  className="cancelBtn"
                  onClick={() => {
                    setIsVisible(false);
                    onClose();
                  }}
                >
                  ביטול
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>nothing</>
      )}
    </div>
  );
};

export default DeletePopup;
