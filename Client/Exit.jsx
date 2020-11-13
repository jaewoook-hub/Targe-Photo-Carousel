import React from 'react';
import styles from './Button.module.css';

class Exit extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.changeViewBack()
  }

  render() {
    return (
      <div>
        <button className={styles.exitBTN} onClick={this.handleClick.bind(this)}>X</button>
      </div>
    )
  }
}

export default Exit;
