import './index.css'

const TabImages = props => {
  const {details, getThumbNailId} = props
  const {id, imageUrl, thumbnailUrl, category} = details

  const sendThumbNailId = () => {
    getThumbNailId(id)
  }

  return (
    <li className="listImagesContainer">
      <button className="button" type="button" onClick={sendThumbNailId}>
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}

export default TabImages
