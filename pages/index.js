import { redirect } from '../tools/utils'
import { withReduxSaga } from '../redux/store'

const Index = () => {}
Index.getInitialProps = ({ res, isServer }) => {
  redirect('/maxnews', { res, isServer })
}

export default withReduxSaga(Index)
