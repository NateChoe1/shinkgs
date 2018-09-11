// @flow
import React, { PureComponent as Component } from "react";
import { Icon } from "./Icon";

type Props = {};

export class SelectInput extends Component<Props> {
  render() {
    return (
      <div className="SelectInput">
        <select {...this.props} />
        <div className="SelectInput-icon">
          <Icon name="chevron-down" />
        </div>
      </div>
    );
  }
}
