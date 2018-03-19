import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LivesTable from './LivesTable'
import { Component } from 'react'
import { fetchLivesDucks } from '../../redux/ducks/lives'
import { Row, Col, Breadcrumb, Button } from 'antd'
import Link from 'next/link'
import * as api from '../../api'
import Router from 'next/router'

import vars from '../../components/commons/vars'

class LivesData extends Component {
  constructor(props) {
    super(props)
    this.deleteData = this.deleteData.bind(this)
  }

  componentDidMount() {
    this.props.fetchLivesDucks(this.props.auth.token, 0, 10)
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
    Router.push(`/lives/modify?id=${data.id}`)
  }

  render() {
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
            Lives
          </Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Row>
            <Col span={12}>
              <div className="title">Lives</div>
            </Col>
            <Col span={12}>
              <div className="title">
                <Link href="/live/new">
                  <Button
                    style={{
                      width: '5rem',
                      height: '2rem',
                      backgroundColor: '#4caf4f',
                      color: 'white',
                      fontSize: '1rem',
                      float: 'right',
                      marginRight: '0.5rem',
                    }}
                  >
                    New
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <LivesTable
          fetchLives={this.props.fetchLivesDucks}
          token={this.props.auth.token}
          livesData={this.props.livesData.data}
          lengtOflives={this.props.livesData.lengthOfData}
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
  livesData: state.lives,
  auth: state.auth,
})

export default connect(mapStateToProps, { fetchLivesDucks })(LivesData)
