import React from 'react';
import { Button } from 'semantic-ui-react';

class AutoClaimForm extends React.PureComponent {

  emit(event) {
    this.props.emitEvent({
      vin: `VIN${new Date().getTime()}`,
      eventType: event,
      latitude: '100.0',
      longitude: '100.0',
      eventDateTime: new Date(),
      details: (event === 'STARTED' && 'car started') || (event === 'STOPPED' && 'car stopped') || (event === 'DRIVING' && 'car driving') || (event === 'CRASHED' && 'car crashed'),
    });
  }

  emitCrashEvent() {
    this.props.emitCrashEvent({
      vin: `VIN${new Date().getTime()}`,
      eventType: 'CRASHED',
      latitude: '100.0',
      longitude: '100.0',
      eventDateTime: new Date(),
      details: 'car crashed',
    });

    this.props.autoClaim({
      customerid: this.props.customerId,
      policyNumber: this.props.policyNumber,
      statusDate: new Date(),
      vin: this.props.vin,
      notes: 'Automatic Claim Created based on Sensor data',
    });
  }

  render() {
    return (
      <div>
        <Button size="large" onClick={() => this.emit('STARTED')}>
          START
        </Button>
        <Button size="large" onClick={() => this.emit('DRIVING')}>
          DRIVE
        </Button>
        <Button size="large" onClick={() => this.emit('STOPPED')}>
          STOP
        </Button>
        <Button size="large" onClick={() => this.emitCrashEvent()}>
          CRASHED
        </Button>
      </div>
    );
  }
}

AutoClaimForm.propTypes = {
  emitEvent: React.PropTypes.func,
  emitCrashEvent: React.PropTypes.func,
  vin: React.PropTypes.string,
  policyNumber: React.PropTypes.string,
  customerId: React.PropTypes.string,
  autoClaim: React.PropTypes.func,
};

export default AutoClaimForm;
