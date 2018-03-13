import { Upload, Icon, message } from 'antd'
import { Component } from 'react'
import * as api from '../../api'

class UploadFightcardImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      imageUrl: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = info => {
    //console.log('do it')
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        this.props.onChangeImg(info.file.name, imageUrl)
        this.setState({
          imageUrl: imageUrl,
          loading: false,
        })
      })
    }
  }

  componentWillReceiveProps(nexProps) {
    //console.log('FightCard.nextProps: ', nexProps.image)
    //console.log('FightCardn.props: ', this.state.imageUrl)
    if (nexProps.image !== this.state.imageUrl) {
      //console.log('in')
      if (nexProps.image !== undefined) {
        //console.log('1')
        this.setState({
          imageUrl: nexProps.image,
        })
      }
    }
  }

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    const imageUrl = this.state.imageUrl
    //console.log('imageUrlFight: ', imageUrl)
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={api.SERVER + '/maxnews/upload/image'}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img style={{ width: '12rem' }} src={imageUrl} alt="" />
        ) : (
          uploadButton
        )}
      </Upload>
    )
  }
}

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg'
  if (!isJPG) {
    message.error('You can only upload JPG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJPG && isLt2M
}

export default UploadFightcardImage