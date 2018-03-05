import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import VodsTable from './VodsTable'
import { Component } from 'react'
import { fetchVodsDucks } from '../../redux/ducks/vods'
import { Row, Col, Breadcrumb, Button } from 'antd'
import Link from 'next/link'
import * as api from '../../api'
import Router from 'next/router'

import vars from '../../components/commons/vars'

class VodsData extends Component {
  constructor(props) {
    super(props)
    this.deleteData = this.deleteData.bind(this)
  }

  componentDidMount() {
    this.props.fetchVodsDucks()
  }

  async deleteData(data) {
    const result = await api.post(`${api.SERVER}/cms/delete-vods`, data)
    console.log('1')
    this.props.fetchVodsDucks()
  }

  async redirectToModify(data) {
    Router.push(`/vods/modify?id=${data.id}`)
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
            Vods
          </Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Row>
            <Col span={12}>
              <div className="title">Vods</div>
            </Col>
            <Col span={12}>
              <div className="title">
                <Link href="/vods/new">
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
        <VodsTable
          vodsData={this.props.vodsData.data}
          lengtOfvods={this.props.vodsData.lengthOfData}
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
  vodsData: state.vods,
})

export default connect(mapStateToProps, { fetchVodsDucks })(VodsData)
