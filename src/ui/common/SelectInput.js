// @flow
import React, {PureComponent as Component} from 'react';
import {Icon} from './Icon';

export class SelectInput extends Component<$FlowFixMeProps> {
  render() {
    return (
      <div className='SelectInput'>
        <select {...this.props} />
        <div className='SelectInput-icon'>
          <Icon name='chevron-down' />
        </div>
      </div>
    );
  }
}
