import EntrepreneurName from '../../components/edit/DeveloperDetails/Inputs/EntrepreneurName';
import LinkToFacebook from '../../components/edit/DeveloperDetails/Inputs/LinkToFacebook';
import Phone from '../../components/edit/DeveloperDetails/Inputs/Phone';
import Residence from '../../components/edit/DeveloperDetails/Inputs/Residence';
import WordsAboutYou from '../../components/edit/DeveloperDetails/Inputs/WordsAboutYou';
import PicProfile from '../../components/edit/DeveloperDetails/picProfile/PicProfile';
import EditLayout from '../../layouts/EditLayout';
import './scss/description.scss';

const DeveloperDetails = () => {

  return (
    <EditLayout>
      <div className="description">
        <div className='description-container'>
          <form style={{ display: 'flex', flexDirection: "column", maxWidth: "580px" }}>
            <p>גם כאן כמו בכל מקום, אנשים מתחברים לאנשים. לכן, ההיכרות איתך חשובה - מי האדם מאחורי הפרויקט, מה הביא אותך לכאן וכל פרט שיחבר למקום האישי ולהיכרות אמיתית איתך.</p>
            <div className='container-top' style={{ display: "flex", alignItems: "center" }}>
              <PicProfile />
              <div style={{ width: "72%" }}>
                <EntrepreneurName />
                <Residence />
              </div>
            </div>
            <WordsAboutYou />
            <Phone />
            <LinkToFacebook />
          </form>
        </div>
      </div>
    </EditLayout>
  )
}

export default DeveloperDetails


