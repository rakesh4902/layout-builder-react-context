// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeShowContent = () => {
        onToggleShowContent()
      }
      const onChangeShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="configCont">
          <h1 className="layoutHead">Layout</h1>
          <div>
            <input
              type="checkbox"
              id="c1"
              checked={showContent}
              onChange={onChangeShowContent}
            />
            <label htmlFor="c1" className="cont">
              Content
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="l1"
              checked={showLeftNavbar}
              onChange={onChangeShowLeftNavbar}
            />
            <label htmlFor="l1" className="cont">
              Left Navbar
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="r1"
              checked={showRightNavbar}
              onChange={onChangeShowRightNavbar}
            />
            <label htmlFor="r1" className="cont">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
