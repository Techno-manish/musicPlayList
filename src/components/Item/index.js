import './index.css'
import {MdDeleteForever} from 'react-icons/md'

const Item = props => {
  const {tracksList, onDelete} = props
  const {id, name, imageUrl, genre, duration} = tracksList
  const onRemove = () => onDelete(id)
  console.log(imageUrl)
  return (
    <>
      <li className="listItem">
        <div className="imageTextContainer">
          <img src={imageUrl} alt="track" className="image" />
          <div>
            <p>{name}</p>
            <p>{genre}</p>
          </div>
        </div>
        <div>
          <p>{duration}</p>
          <button
            type="button"
            onClick={onRemove}
            className="deleteButton"
            data-testid="delete"
          >
            <MdDeleteForever className="deleteIcon" alt="delete" />
          </button>
        </div>
      </li>
    </>
  )
}
export default Item
