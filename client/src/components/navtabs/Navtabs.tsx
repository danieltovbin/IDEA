import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navtabs = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }
  return (
    <Box sx={{ width: "100%", padding: "0 calc((100% - 818px) / 2) !important", margin: 0 }}>
        <Tabs onChange={handleChange} value={value} >
        <Tab label="תיאור הפרויקט" onClick={()=> navigate('/descriptionProject')}/>
        <Tab label="תוכן הפרויקט" onClick={()=> navigate('/contentEdit')}/>
        <Tab label="תשורות" onClick={()=> navigate('/Submissions')}/>
        <Tab label="פרטי היזם" onClick={()=> navigate('/DeveloperDetails')}/>
        </Tabs>
    </Box>
    // <>
    // <NavLink to="/descriptionProject">About</NavLink>
    // <NavLink to="/contentEdit">About</NavLink>
    // <NavLink to="/Submissions">About</NavLink>
    // </>
  )
}

export default Navtabs


// .navbar {
//   height: 60px;
//   width: 100%;
//   background-color: white;
//   position: fixed;
//   display: flex;
//   justify-content: space-around;
//   img {
//     width: 120px;
//     padding-left: 30px;
//     height: 60px;
//     object-fit: cover;
//   }
//   ul {
//     margin: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     list-style: none;
//     height: 60px;
//     a {
//       // height: 60px;
//       padding: 20px 20px;
//       color: white;
//       color: black;
//       cursor: pointer;
//       transition: all 0.1s;
//       &:hover {
//         border-bottom: 3px solid rgb(255, 107, 203);
//         color: black;
//         text-shadow: 1px 2px 1px white;
//       }
//     }
//     .active {
//       background-color: rgba(0, 0, 0, 0.241);
//       padding: 5px 20px;
//       border-radius: 20px;
//     }
//   }
// }


