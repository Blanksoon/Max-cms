import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Component from 'react'

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
    console.log('key: ', keyNavbar)
    return (
      <Layout>
        <Header style={{ width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[keyNavbar]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link href="/login">
                <a>Home</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/maxnews/modify">
                <a>Maxnews</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/vods/modify">
                <a>Vods</a>
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
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
