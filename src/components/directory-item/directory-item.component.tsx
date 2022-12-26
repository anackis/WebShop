
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DirectoryCategory } from "../directory/directory.component"
import './directory-item.style.scss';

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({category}) => {
  const {imageUrl, title, route} = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <div  className="directory-item-container" onClick={onNavigateHandler}>
      {/* $ in this case allow us to use string inside another string  */}
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}/>
      <div className="directory-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default DirectoryItem;