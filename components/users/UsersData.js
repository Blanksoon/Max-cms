import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UsersTable from './UsersTable'
import { Component } from 'react'
import { fetchUsersDucks } from '../../redux/ducks/users'
import { Row, Col, Breadcrumb, Button } from 'antd'
import Link from 'next/link'
import * as api from '../../api'
import Router from 'next/router'
import fetch from 'isomorphic-fetch'
import saveAs from 'file-saver'

import vars from '../../components/commons/vars'

class UsersData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
    this.deleteData = this.deleteData.bind(this)
    this.exportExcel = this.exportExcel.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsersDucks(this.props.auth.token, 0, 10)
  }

  async deleteData(data) {
    const value = {
      data,
      token: this.props.auth.token,
    }
    const result = await api.post(`${api.SERVER}/cms/delete-lives`, value)
    this.props.fetchLivesDucks(this.props.auth.token)
  }

  async redirectToModify(data) {
    Router.push(`/live/modify?id=${data.id}`)
  }

  async exportExcel() {
    this.setState({
      loading: true,
    })
    window.open(
      `${api.SERVER}/cms/export/user?token=${this.props.auth.token}`,
      '_self'
    )
    this.setState({
      loading: false,
    })
  }

  render() {
    console.log('this.state: ', this.state.loading)
    //console.log('this.props', this.props)
    return (
      <div>
        <Breadcrumb
          style={{
            fontSize: '0.8rem',
            backgroundColor: '#032447',
            color: '#fff',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item style={{ color: `${vars.white}` }}>
            Users
          </Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Row>
            <Col span={12}>
              <div className="title">Users</div>
            </Col>
            <Col span={12}>
              <div className="title">
                <Button
                  style={{
                    width: '8rem',
                    height: '2rem',
                    backgroundColor: '#4caf4f',
                    color: 'white',
                    fontSize: '1rem',
                    float: 'right',
                    marginRight: '0.5rem',
                  }}
                  loading={this.state.loading}
                  onClick={this.exportExcel}
                >
                  Export
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <UsersTable
          fetchUsers={this.props.fetchUsersDucks}
          token={this.props.auth.token}
          usersData={this.props.usersData.data}
          lengtOfusers={this.props.usersData.lengthOfData}
          deleteData={this.deleteData}
          redirectToModify={this.redirectToModify}
        />
        <style jsx global>{`
          .ant-breadcrumb-separator {
            color: ${vars.lightBlue} !important;
          }
          .ant-breadcrumb-link {
            color: ${vars.lightBlue};
          }
          .title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 0.7rem;
          }
          .serch {
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  usersData: state.users,
  auth: state.auth,
})

export default connect(mapStateToProps, { fetchUsersDucks })(UsersData)
