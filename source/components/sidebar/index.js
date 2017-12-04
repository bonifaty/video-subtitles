import {h, Component} from 'preact';
import Subtitles from '../subtitles-screen';
import EditForm from '../form';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      editId: null,
    };

    this.handleOnShowForm = this.handleOnShowForm.bind(this);
    this.handleOnHideForm = this.handleOnHideForm.bind(this);
  }

  handleOnShowForm(id) {
    this.setState({
      showForm: true,
      editId: id,
    });
  }

  handleOnHideForm() {
    this.setState({
      showForm: false,
    });
  }

  render(props, {showForm, editId}) {
    return showForm ?
      <EditForm onHideForm={this.handleOnHideForm} id={editId} /> :
      <Subtitles onShowForm={this.handleOnShowForm} />;
  }
}

export default Sidebar;
