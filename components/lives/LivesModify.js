import {
  DatePicker,
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Modal,
} from 'antd'
import UploadFightcardImage from '../utils/UploadFightcardImage'
import UploadImageBanner from '../utils/UploadImageBanner'
import UploadLogoImage from '../utils/UploadLogoImage'
import * as api from '../../api'
import Spinner from '../commons/Spinner'
import Router from 'next/router'

const FormItem = Form.Item
const Option = Select.Option
const AutoCompleteOption = AutoComplete.Option
const { TextArea } = Input

class LivesModify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: {},
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.info = this.info.bind(this)
    this.handleFightcardImage = this.handleFightcardImage.bind(this)
    this.handleBannerImage = this.handleBannerImage.bind(this)
    this.handleLogoImage = this.handleLogoImage.bind(this)
    this.updateLive = this.updateLive.bind(this)
    this.setFieldsDataInForm = this.setFieldsDataInForm.bind(this)
    this.checkLiveDate = this.checkLiveDate.bind(this)
  }

  async componentDidMount() {
    const data = await api.get(`${api.SERVER}/cms/lives/${this.props.id}`)
    data.liveDay = this.checkLiveDate(data.liveDay)
    this.setState({
      data: data,
    })
    this.setFieldsDataInForm()
  }

  handleFightcardImage(imgUrl) {
    //console.log('222222')
    if (imgUrl !== '') {
      this.props.form.setFieldsValue({
        fightcardUrl: imgUrl,
      })
    }
    return 'success'
  }

  handleBannerImage(imgUrl) {
    if (imgUrl !== '') {
      this.props.form.setFieldsValue({
        bannerUrl: imgUrl,
      })
    }
    return 'success'
  }

  handleLogoImage(imgUrl) {
    if (imgUrl !== '') {
      this.props.form.setFieldsValue({
        logoUrl: imgUrl,
      })
    }
    return 'success'
  }

  checkLiveDate(day) {
    switch (parseInt(day)) {
      case 0:
        return 'Sunday'
      case 1:
        return 'Monday'
      case 2:
        return 'Tuesday'
      case 3:
        return 'Wednesday'
      case 4:
        return 'Thursday'
      case 4:
        return 'Friday'
      case 6:
        return 'Saturday'
    }
  }

  setFieldsDataInForm() {
    //console.log('1', this.state.data)
    this.props.form.setFieldsValue({
      title_en: this.state.data.title_en,
    })
    this.props.form.setFieldsValue({
      shortDesc1_en: this.state.data.shortDesc1_en,
    })
    this.props.form.setFieldsValue({
      shortDesc2_en: this.state.data.shortDesc2_en,
    })
    this.props.form.setFieldsValue({
      desc_en: this.state.data.desc_en,
    })
    this.props.form.setFieldsValue({
      title_th: this.state.data.title_th,
    })
    this.props.form.setFieldsValue({
      shortDesc1_th: this.state.data.shortDesc1_th,
    })
    this.props.form.setFieldsValue({
      shortDesc2_th: this.state.data.shortDesc2_th,
    })
    this.props.form.setFieldsValue({
      desc_th: this.state.data.desc_th,
    })
    this.props.form.setFieldsValue({
      programName: this.state.data.programName,
    })
    this.props.form.setFieldsValue({
      startTime: this.state.data.startTime,
    })
    this.props.form.setFieldsValue({
      endTime: this.state.data.endTime,
    })
    this.props.form.setFieldsValue({
      liveDay: this.state.data.liveDay,
    })
    this.props.form.setFieldsValue({
      fightcardUrl: this.state.data.fightcardUrl,
    })
    this.props.form.setFieldsValue({
      videoUrl: this.state.data.videoUrl,
    })
    this.props.form.setFieldsValue({
      promoUrl: this.state.data.promoUrl,
    })
    this.props.form.setFieldsValue({
      bannerUrl: this.state.data.bannerUrl,
    })
    this.props.form.setFieldsValue({
      logoUrl: this.state.data.logoUrl,
    })
    this.props.form.setFieldsValue({
      price: this.state.data.price,
    })

    // if (imgUrl !== '') {
    //   this.props.form.setFieldsValue({
    //     fightcardUrl: imgUrl,
    //   })
    // }
    return 'success'
  }

  async updateLive(value) {
    //console.log('1', value)
    value._id = this.state.data._id
    const result = await api.post(`${api.SERVER}/cms/lives/update`, value)
    return 'hi'
    //console.log('2', result)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      this.setState({
        loading: true,
      })
      if (!err) {
        //console.log(values)
        await this.updateLive(values)
        //console.log('3', values)
        this.info()
      }
      this.setState({
        loading: false,
      })
    })
  }

  info() {
    Modal.info({
      title: 'Success for update live',
      content: (
        <div>
          <p>you update 1 live</p>
        </div>
      ),
      onOk() {
        Router.push(`/live`)
      },
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    //console.log('111111111111', this.state.data)
    const { autoCompleteResult } = this.state
    //this.setFieldsDataInForm()
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 10,
        },
      },
    }
    return (
      <div>
        <Row>
          <Col span={24}>
            <h1>Live</h1>
          </Col>
        </Row>
        <div className={'setting-row'}>
          <h2>EN</h2>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Title:">
            {getFieldDecorator('title_en', {
              rules: [
                {
                  required: true,
                  message: 'Please select Title!',
                },
              ],
            })(
              <Select
                showSearch
                style={{ width: 250 }}
                placeholder="Select a title"
                optionFilterProp="children"
                //onChange={this.handleChange}
                //onFocus={this.handleFocus}
                //onBlur={this.handleBlur}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="Max Muay Thai">Max Muay Thai</Option>
                <Option value="Battle Muay Thai">Muay Thai Battle</Option>
                <Option value="Muaythai Fighter">Muaythai Fighter</Option>
                <Option value="The Champion Muay Thai">
                  The Champion Muay Thai
                </Option>
                <Option value="Global Fight Wednesday">
                  Global Fight Wednesday
                </Option>
                <Option value="Global Fight Thursday">
                  Global Fight Thursday
                </Option>
                <Option value="MUAY THAI FIGHTER Monday">
                  MUAY THAI FIGHTER Monday
                </Option>
                <Option value="Octa Fight Tuesday">Octa Fight Tuesday</Option>
                <Option value="Max Sunday Afternoon">
                  Max Sunday Afternoon
                </Option>
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Short-desc1:">
            {getFieldDecorator('shortDesc1_en', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Short-desc1!',
                },
              ],
            })(<TextArea rows={10} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Short-desc2:">
            {getFieldDecorator('shortDesc2_en', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Short-desc2!',
                },
              ],
            })(<TextArea rows={10} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Desc:">
            {getFieldDecorator('desc_en', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Desc!',
                },
              ],
            })(<TextArea rows={10} />)}
          </FormItem>
          <hr className={`hr-tag`} />
          <div className={'setting-row'}>
            <h2>TH</h2>
          </div>
          <FormItem {...formItemLayout} label="Title:">
            {getFieldDecorator('title_th', {
              rules: [
                {
                  required: true,
                  message: 'Please select Title!',
                },
              ],
            })(
              <Select
                showSearch
                style={{ width: 250 }}
                placeholder="Select a Title"
                optionFilterProp="children"
                //onChange={this.handleChange}
                //onFocus={this.handleFocus}
                //onBlur={this.handleBlur}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="แม็กซ์มวยไทย">แม็กซ์มวยไทย</Option>
                <Option value="มวยไทย แบทเทิล">มวยไทย แบทเทิล</Option>
                <Option value="มวยไทย ไฟต์เตอร์">มวยไทย ไฟต์เตอร์</Option>
                <Option value="เดอะแชมป์เปี้ยน มวยไทย ตัดเชือก">
                  เดอะแชมป์เปี้ยน มวยไทย ตัดเชือก
                </Option>
                <Option value="โกลด์บอล ไฟท์ วันพุธ">
                  โกลด์บอล ไฟท์ วันพุธ
                </Option>
                <Option value="โกลด์บอล ไฟท์ วันพฤหัส">
                  โกลด์บอล ไฟท์ วันพฤหัส
                </Option>
                <Option value="มวยไทยไฟต์เตอร์ วันจันทร์">
                  มวยไทยไฟต์เตอร์ วันจันทร์
                </Option>
                <Option value="มวยไทยไฟต์เตอร์ วันอังคาร">
                  มวยไทยไฟต์เตอร์ วันอังคาร
                </Option>
                <Option value="แม็กซ์ วันอาทิตย์ บ่าย">
                  แม็กซ์ วันอาทิตย์ บ่าย
                </Option>
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Short-desc1:">
            {getFieldDecorator('shortDesc1_th', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Short-desc1!',
                },
              ],
            })(<TextArea rows={10} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Short-desc2:">
            {getFieldDecorator('shortDesc2_th', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Short-desc2!',
                },
              ],
            })(<TextArea rows={10} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Desc:">
            {getFieldDecorator('desc_th', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Desc!',
                },
              ],
            })(<TextArea rows={10} />)}
          </FormItem>
          <hr className={`hr-tag`} />
          <FormItem {...formItemLayout} label="Program-name:">
            {getFieldDecorator('programName', {
              rules: [
                {
                  required: true,
                  message: 'Please select Program-name!',
                },
              ],
            })(
              <Select
                showSearch
                style={{ width: 250 }}
                placeholder="Select a program"
                optionFilterProp="children"
                //onChange={this.handleChange}
                //onFocus={this.handleFocus}
                //onBlur={this.handleBlur}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="Max Muay Thai">Max Muay Thai</Option>
                <Option value="Battle Muay Thai">Battle Muay Thai</Option>
                <Option value="Muaythai Fighter">Muaythai Fighter</Option>
                <Option value="The Champion Muay Thai">
                  The Champion Muay Thai
                </Option>
                <Option value="Global Fight Wednesday">
                  Global Fight Wednesday
                </Option>
                <Option value="Global Fight Thursday">
                  Global Fight Thursday
                </Option>
                <Option value="MUAY THAI FIGHTER Monday">
                  MUAY THAI FIGHTER Monday
                </Option>
                <Option value="Octa Fight Tuesday">Octa Fight Tuesday</Option>
                <Option value="Max Sunday Afternoon">
                  Max Sunday Afternoon
                </Option>
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Start-Time:">
            {getFieldDecorator('startTime', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Start-Time!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="End-Time:">
            {getFieldDecorator('endTime', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your End-Time!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Live-Date:">
            {getFieldDecorator('liveDay', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Live-Date!',
                },
              ],
            })(
              <Select
                showSearch
                style={{ width: 250 }}
                placeholder="Select a day"
                optionFilterProp="children"
                //onChange={this.handleChange}
                //onFocus={this.handleFocus}
                //onBlur={this.handleBlur}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="Monday">Monday</Option>
                <Option value="Tuesday">Tuesday</Option>
                <Option value="Wednesday">Wednesday</Option>
                <Option value="Thursday">Thursday</Option>
                <Option value="Friday">Friday</Option>
                <Option value="Saturday">Saturday</Option>
                <Option value="Sunday">Sunday</Option>
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Fightcard-Url:">
            {getFieldDecorator('fightcardUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [
                {
                  required: true,
                  message: 'Please upload Fightcard!',
                },
              ],
            })(
              <UploadFightcardImage
                onChangeImg={this.handleFightcardImage}
                image={this.state.data.fightcardUrl}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Video-url:">
            {getFieldDecorator('videoUrl', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Video-url!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Promo-url:">
            {getFieldDecorator('promoUrl', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Promo-url!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Banner-url:">
            {getFieldDecorator('bannerUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [
                {
                  required: true,
                  message: 'Please upload Banner-url!',
                },
              ],
            })(
              <UploadImageBanner
                onChangeImg={this.handleBannerImage}
                image={this.state.data.bannerUrl}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Logo-url:">
            {getFieldDecorator('logoUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [
                {
                  required: true,
                  message: 'Please upload Logo-url!',
                },
              ],
            })(
              <UploadLogoImage
                onChangeImg={this.handleLogoImage}
                image={this.state.data.logoUrl}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Price:">
            {getFieldDecorator('price', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Price!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <div>
              <Button
                style={{
                  width: '9rem',
                  height: '2.5rem',
                  backgroundColor: '#4caf4f',
                  color: 'white',
                  fontSize: '1.2rem',
                }}
                loading={this.state.loading}
                htmlType="submit"
              >
                save
              </Button>
            </div>
          </FormItem>
        </Form>
        <style jsx>{`
          .setting-row {
            margin-left: 1rem;
          }
          .hr-tag {
            margin-bottom: 1.5rem;
          }
          .submit-button {
            width: 8rem;
            height: 2rem;
            background-color: green;
            color: white;
          }
        `}</style>
      </div>
    )
  }
}

const Info = Form.create()(LivesModify)
export default Info
