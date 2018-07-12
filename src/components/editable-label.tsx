import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Button from '@app/components/button';
import TextBox from '@app/components/textbox';
import Text from '@app/components/text';

type Props = Partial<{
  value?: string;
  editing?: boolean;
  placeholder?: string;
  valueChanged?(value: string);
}>;

type State = Partial<{
  value: string;
  editing: boolean;
  inputText: string;
}>;

const initialState: State = {
  editing: false,
  value: '',
  inputText: '',
};

export class EditableLabel extends React.Component<Props, State> {
  state: State = initialState;

  constructor(props: Props) {
    super(props);
    this.state = {
      ...initialState,
      editing: props.editing || initialState.editing,
      value: props.value || initialState.value,
    };
    this.state.inputText = this.state.value;
  }

  startEdit() {
    this.setState({ editing: true, inputText: this.state.value });
  }

  commitEdit() {
    const value = this.state.inputText || '';
    this.setState({ editing: false, inputText: '', value });
    if (this.props.valueChanged) {
      this.props.valueChanged(value);
    }
    return true;
  }

  cancelEdit() {
    this.setState({ editing: false, inputText: '' });
    return true;
  }

  handleInputKey(event: React.KeyboardEvent<HTMLInputElement>) {
    switch (event.keyCode) {
      case 13:
        return this.commitEdit();
      case 27:
        return this.cancelEdit();
      default:
        return false;
    }
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputText: event.target.value });
  }

  renderLabel() {
    return (
      <>
        <Text>{this.state.value}</Text>
        <Button className="mh1 gray link" onClick={e => this.startEdit()}>
          <FontAwesomeIcon icon="edit" />
        </Button>
      </>
    );
  }

  renderInput() {
    return (
      <>
        <TextBox
          className="pa2 mt2 br2 b--black-20 ba f6"
          autoFocus={true}
          value={this.state.inputText}
          placeholder={this.props.placeholder}
          onKeyDown={e => this.handleInputKey(e)}
          onChange={e => this.handleChange(e)}
        />
        <Button className="mh1 gray link" onClick={e => this.commitEdit()}>
          <FontAwesomeIcon icon="check" />
        </Button>
        <Button className="mh1 gray link" onClick={e => this.cancelEdit()}>
          <FontAwesomeIcon icon="ban" />
        </Button>
      </>
    );
  }

  render() {
    return <>{this.state.editing ? this.renderInput() : this.renderLabel()}</>;
  }
}

export default EditableLabel;
