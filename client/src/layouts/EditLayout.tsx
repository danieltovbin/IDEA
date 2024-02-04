import React,{FC} from 'react'
import AppBarProps from '../components/appbar/AppBar';
import Navtabs from '../components/navtabs/Navtabs';
import './scss/edit.scss';

interface LayoutProps {
    children: React.ReactNode;
}

const EditLayout:FC<LayoutProps> = ({children}) => {
    return (
        <div className="edit" >
          <AppBarProps />
          <div>
            <Navtabs />
          </div>
          {children}
        </div>
      );
}

export default EditLayout