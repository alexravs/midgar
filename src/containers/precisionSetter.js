import { connect } from 'react-redux';
import PrecisionBar from '../components/PrecisionBar';

const mapStateToProps = (state) => ({
  precision: state.map.precision,
});

const mapDispatchToProps = (dispatch) => ({
  onPrecisionChange: (e) => dispatch({
    type: 'CHANGE_PRECISION',
    precision: e.target.value,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrecisionBar);
