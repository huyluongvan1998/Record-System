import Header from './components/Header/Header';
import './App.css';
import User from './components/layouts/User';
import Modal from './components/Modal/Modal';
import  { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from './components/layouts/Alert';
const App = ({ user: { isShow } }) => {
  return (
    <div className="App">
      <Modal isShow ={ isShow } />
      <Header />
      <Alert />
      <User />
    </div>
  );
}

App.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App);
