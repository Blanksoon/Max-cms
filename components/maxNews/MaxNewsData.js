import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MaxNewsTable from './MaxNewsTable'
import { Component } from 'react'
import { fetchMaxnewsDucks } from '../../redux/ducks/news'
import { Row, Col, Breadcrumb, Button } from 'antd'
import Link from 'next/link'
import * as api from '../../api'
import Router from 'next/router'

import vars from '../../components/commons/vars'

class MaxNewsData extends Component {
  constructor(props) {
    super(props)
    this.deleteData = this.deleteData.bind(this)
    this.redirectToModify = this.redirectToModify.bind(this)
  }

  componentDidMount() {
    this.props.fetchMaxnewsDucks(this.props.auth.token)
  }

  async deleteData(data) {
    const value = {
      data,
      token: this.props.auth.token,
    }
    const result = await api.post(`${api.SERVER}/cms/delete-news`, value)
    this.props.fetchMaxnewsDucks(this.props.auth.token)
  }

  async redirectToModify(data) {
    Router.push(`/maxnews/modify?id=${data.id}`)
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
          {/* <Breadcrumb.Item>
            <a href="" style={{ color: `${vars.lightBlue}` }}>
              Application Center
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="" style={{ color: `${vars.lightBlue}` }}>
              Application List
            </a>
          </Breadcrumb.Item> */}
          <Breadcrumb.Item style={{ color: `${vars.white}` }}>
            Maxnews
          </Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Row>
            <Col span={12}>
              <div className="title">Maxnews</div>
            </Col>
            <Col span={12}>
              <div className="title">
                <Link href="/maxnews/new">
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
        <MaxNewsTable
          maxnewsData={this.props.maxnewsData.data}
          lengtOfMaxnews={this.props.maxnewsData.lengthOfData}
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
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  maxnewsData: state.news,
  auth: state.auth,
})

export default connect(mapStateToProps, { fetchMaxnewsDucks })(MaxNewsData)
