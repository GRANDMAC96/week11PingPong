import { connect } from "react-redux";
import Loading from "./Loading";
import { postGame } from "../../data/api";

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(postGame()),
});
// make sure to add mapDispatchToProps into connect

export default connect(mapStateToProps, mapDispatchToProps)(Loading);