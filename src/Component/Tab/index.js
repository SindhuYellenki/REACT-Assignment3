import './index.css'

const Tab = props => {
  const {details, changeActiveTab} = props
  const {tabId, displayText} = details

  const onClickTab = () => {
    changeActiveTab(tabId)
  }

  return (
    <li className="listItemContainer">
      <button className="button" type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default Tab
