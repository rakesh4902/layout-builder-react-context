// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="bodyCont">
          {showLeftNavbar ? (
            <div className="leftBar">
              <h1 className="leftHead">Left Navbar Menu</h1>
              <ul className="leftPara">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent && (
            <div className="Content">
              <h1 className="leftHead">Content</h1>
              <p className="leftPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="rightNavBar">
              <h1 className="leftHead">Right Navbar</h1>
              <div className="addBtnCont">
                <p className="addBtn">Ad 1</p>
                <p className="addBtn">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
