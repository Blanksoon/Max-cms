import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import VodsTable from './VodsTable'
import { Component } from 'react'
import { fetchVodsDucks } from '../../redux/ducks/vods'
import { Row, Col, Breadcrumb, Button } from 'antd'
import Link from 'next/link'

import vars from '../../components/commons/vars'

class VodsData extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchVodsDucks()
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
          <Breadcrumb.Item>Vods</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="" style={{ color: `${vars.lightBlue}` }}>
              Application Center
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="" style={{ color: `${vars.lightBlue}` }}>
              Application List
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item style={{ color: `${vars.white}` }}>
            An Application
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
