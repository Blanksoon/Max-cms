import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MaxNewsTable from './MaxNewsTable'
import { Component } from 'react'
import { fetchMaxnewsDucks } from '../../redux/ducks/news'
import { Row, Col, Breadcrumb, Button } from 'antd'
import Link from 'next/link'

import vars from '../../components/commons/vars'

class MaxNewsData extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchMaxnewsDucks()
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
          <Breadcrumb.Item>Maxnews</Breadcrumb.Item>
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
  maxnewsData: state.news,
})

export default connect(mapStateToProps, { fetchMaxnewsDucks })(MaxNewsData)
