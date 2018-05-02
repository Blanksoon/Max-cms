import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Component from 'react'
import Logout from '../components/commons/Logout'
import { connect } from 'react-redux'

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
    const { children, keyNavbar, email } = this.props
    console.log('this.props: ', this.porps)
    const navBarMaxnews = (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[keyNavbar]}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="Maxnews">
          <Link href="/maxnews">
            <a>Maxnews</a>
          </Link>
        </Menu.Item>
      </Menu>
    )
    const navBarAdmin = (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[keyNavbar]}
        style={{ lineHeight: '64px' }}
      >
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
        <Menu.Item key="Lives">
          <Link href="/lives">
            <a>Lives</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="Users">
          <Link href="/users">
            <a>Users</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="Orders">
          <Link href="/orders">
            <a>Orders</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="Poster">
          <Link href="/poster">
            <a>Poster</a>
          </Link>
        </Menu.Item>
      </Menu>
    )

    return (
      <Layout style={{ backgroundColor: '#032447' }}>
        <Header style={{ width: '100%' }}>
          <div className="logo" />
          <div style={{ float: 'right' }}>
            <Logout />
          </div>
          {email === 'maxnews@email.com' ? navBarMaxnews : navBarAdmin}
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

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, null)(Main)
