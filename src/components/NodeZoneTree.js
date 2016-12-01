import React, { Component } from 'react';
import ContainerNodeZoneTree from '../containers/ContainerNodeZoneTree';
import styled from 'styled-components';
import {
    Collapse,
} from '@blueprintjs/core';

const Wrapper = styled.li`
  list-style: none;
  cursor: pointer;
`;

export default class NodeZoneTree extends Component {
  constructor () {
    super();
    this.state = {
      opened: false,
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  };

  handleOnClick() {
    const { zone, handleOnClickNode } = this.props;
    this.setState({
      opened: !this.state.opened,
    });
    handleOnClickNode();
  }

  render() {
    const { name, zoneChildren } = this.props;
    const { opened } = this.state;
    const hasChildren = zoneChildren.length > 0;
    return (
      <Wrapper>
        {
          hasChildren ?
          ( opened ?
            <span className='pt-icon-caret-down' /> :
            <span className='pt-icon-caret-right' />
          ) :
          (null)
        }
        {' '}
        <span onClick={this.handleOnClick}>{ name }</span>
        <Collapse isOpen={opened}>
          { hasChildren && opened ? (
            <Collapse isOpen={opened}>
              <ul>
                {zoneChildren.map((zone) => (
                  <ContainerNodeZoneTree zone={zone} />
                ))}
              </ul>
            </Collapse> ) : <div />}
        </Collapse>
      </Wrapper>
    );
  }
}
