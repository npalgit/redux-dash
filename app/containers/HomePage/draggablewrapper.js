import React, { PropTypes, Component } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { Segment, Dimmer, Header, Icon } from 'semantic-ui-react';


const FormSegment = styled(Segment)`
  z-index: 100;
`;


class CreateDraggable extends Component {
  state = { active: false }

  handleShow = () => {
    if (!this.props.disabled) return;
    this.setState({ active: true });
  }

  handleHide = () => {
    if (!this.props.disabled) return;
    this.setState({ active: false });
  }

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h5" inverted>{this.props.disableMessage}</Header>
      </div>
    );
    return (
      <Draggable>
        <div>
          <Header as="h4" attached="top" inverted color={this.props.color}>
            <Icon name={this.props.icon} />
            {this.props.header}
          </Header>
          <FormSegment color={this.props.color} attached disabled={this.props.disabled}>
            <Dimmer.Dimmable
              blurring
              as={Segment}
              dimmed={active}
              onMouseEnter={this.handleShow}
              onMouseLeave={this.handleHide}
            >
              <Dimmer active={active} content={content} />
              {this.props.children}
            </Dimmer.Dimmable>
          </FormSegment>
        </div>
      </Draggable>
    );
  }
}

CreateDraggable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  header: PropTypes.string,
  disableMessage: PropTypes.string,
  icon: PropTypes.string,
};

export default CreateDraggable;
