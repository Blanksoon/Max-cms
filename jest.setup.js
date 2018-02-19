// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme'
// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16'
import dotenv from 'dotenv'

dotenv.config({ path: `./configs/.env.${process.env.NODE_ENV}` })
configure({ adapter: new Adapter() })
