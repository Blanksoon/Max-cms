import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Component from 'react'
import Logout from '../components/commons/Logout'

const { Header, Content, Footer } = Layout
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultSelectedKeys: 1,
    }
    this.changedefaultSelectedKeys = this.changedefaultSelectedKeys.bind(this)
  }
  changedefaultSelectedKeys = value => {
    this.setState({
      defaultSelectedKeys: value,
    })
  }

  render() {
    const { children, keyNavbar } = this.props
    //console.log('key: ', keyNavbar)
    return (
      <Layout style={{ backgroundColor: '#032447' }}>
        <Header style={{ width: '100%' }}>
          <div className="logo" />
          <div style={{ float: 'right' }}>
            <Logout />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[keyNavbar]}
            style={{ lineHeight: '64px' }}
          >
            {/* <Menu.Item key="Home">
              <Link href="/login">
                <a>Home</a>
              </Link>
            </Menu.Item> */}
            <Menu.Item key="Maxnews">
              <Link href="/maxnews">
                <a>Maxnews</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="Vods">
              <Link href="/vods">
                <a>Vods</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="Live">
              <Link href="/live">
                <a>Live</a>
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 30px', marginTop: 24 }}>
          <div style={{ background: '#fff', padding: 0, minHeight: 450 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

// Main.propTypes = {
//   children: PropTypes.node,
// }
// Main.defaultProps = {
//   children: null, // render nothing
// }

export default Main
