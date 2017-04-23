import { Label } from 'semantic-ui-react';
import React, { PureComponent, Component, PropTypes } from 'react'; //eslint-disable-line
import styled from 'styled-components';

const PaddedLabel = styled(Label)`
  margin: 2px !important;
`;

class BadgeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBadge: '',
    };
  }

  componentDidMount() {
    this.state.selectedBadge = this.props.selected;
  }

  selectBadge(k) {
    // this.setState({ selectedBadge: k });
    this.props.onSelect(k);
  }

  render() {
    return (
      <div>
        {this.props.badges.map((y, j) =>
          <PaddedLabel key={j} onClick={() => this.selectBadge(y)} color={this.props.selected === y ? 'blue' : 'grey'}>
            {y}
          </PaddedLabel>
        )}
      </div>
    );
  }
}

BadgeSelect.propTypes = {
  selected(props, propName, componentName) { //eslint-disable-line
    if (!props.badges.includes(props.selected)) {
      return new Error(
        `Invalid prop ${propName} is supplied to ${componentName} with a Value of ${props.selected} Validation failed.`
      );
    }
  },
  badges: PropTypes.array,
  onSelect: PropTypes.func,
};

export default BadgeSelect;
