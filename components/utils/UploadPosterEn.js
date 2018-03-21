import { Upload, Icon, Modal } from 'antd'
import * as api from '../../api'

class UploadPosterEn extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
    fistImage: '',
  }

  componentWillReceiveProps(nexProps) {
    if (nexProps.image === null || nexProps.image === undefined) {
      return 'null'
    } else {
      if (this.state.fistImage !== nexProps.image) {
        this.setState({
          fistImage: this.props.image,
          fileList: [
            {
              uid: -1,
              name: 'xxx.png',
              status: 'done',
              url: this.props.image,
            },
          ],
        })
      }
    }
  }

  handleCancel = () => {
    this.setState({ previewVisible: false })
  }

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = ({ fileList }) => {
    //console.log(fileList[0])
    if (fileList[0] === undefined) {
      this.props.deletePosterEn()
      this.setState({ fileList })
    } else {
      if (fileList[0].status === 'uploading') {
      }
      if (fileList[0].status === 'done') {
        // Get this url from response in real world.
        getBase64(fileList[0].originFileObj, imageUrl => {
          this.props.onChangeImg(fileList[0].name, imageUrl)
          this.setState({
            imageUrl: imageUrl,
            loading: false,
          })
        })
      }
      this.setState({ fileList })
    }
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state
    //console.log('previewImage: ', previewImage)
    //console.log('fileList: ', fileList)
    //console.log('this.props: ', this.props)
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div className="clearfix">
        <Upload
          className="avatar-uploader"
          name="avatar"
          action={api.SERVER + '/maxnews/upload/image'}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img
            alt="example"
            style={{ width: '12rem', height: '12rem' }}
            src={previewImage}
          />
        </Modal>
      </div>
    )
  }
}

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

export default UploadPosterEn