import {h, Component} from 'preact';
import Subtitles from '../subtitles-screen';
import Form from '../form';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
    };

    this.handleOnShowForm = this.handleOnShowForm.bind(this);
    this.handleOnHideForm = this.handleOnHideForm.bind(this);
  }

  handleOnShowForm() {
    this.setState({
      showForm: true,
    });
  }

  handleOnHideForm() {
    this.setState({
      showForm: false,
    });
  }

  render(props, state) {
    return state.showForm ?
      <Form onHideForm={this.handleOnHideForm} /> :
      <Subtitles onShowForm={this.handleOnShowForm} />;
  }
}

export default Sidebar;
