import React from 'react'
import { Animated } from 'react-native'

class ChangeImageSize extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      size: new Animated.Value(this.getImageSize())
    }
  }

  getImageSize() {
    return this.props.shouldEnlarge ? 40 : 35
  }

  componentDidUpdate() {
    Animated.spring(
      this.state.size,
      {
        toValue: this.getImageSize()
      }
    ).start()
  }

  render() {
    return (
        <Animated.View
          style={{ width: this.state.size, height: this.state.size }}>
            {this.props.children}
        </Animated.View>
    )
  }
}

export default ChangeImageSize
