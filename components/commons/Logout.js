import { Dropdown, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../redux/ducks/auth'

const Logout = ({ email, logout }) => {
  const handleLogout = () => {
    logout()
  }
  const userMenu = (
    <Menu>
      <Menu.Item>
        <div
          onClick={handleLogout}
          onKeyPress={handleLogout}
          role="button"
          tabIndex={0}
        >
          Logout
        </div>
      </Menu.Item>
    </Menu>
  )
  return (
    !!email && (
      <Dropdown overlay={userMenu}>
        <a
          className="ant-dropdown-link"
          href="#"
          style={{ fontSize: 16, marginTop: '2rem' }}
        >
          {email} <Icon type="down" />
        </a>
      </Dropdown>
    )
  )
}
const mapStateToProps = state => ({
  email: state.auth.email,
})

export default connect(mapStateToProps, actions)(Logout)
