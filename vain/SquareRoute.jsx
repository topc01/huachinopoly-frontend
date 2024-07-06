import React, { Component } from 'react';
import Auto from '../assets/img/auto.png';

class Car extends Component {
  state = {
    position: { x: 0, y: 0 },
  };

  componentDidMount() {
    this.animateCar();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationId);
  }

  animateCar = () => {
    const start = performance.now();
    const duration = 5000; // in milliseconds
    const distance = 150; // in pixels
    const startX = 0;
    const startY = 0;
    const points = [
      { x: startX + distance, y: startY },
      { x: startX + distance, y: startY + distance },
      { x: startX, y: startY + distance },
      { x: startX, y: startY },
    ];

    const animate = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const index = Math.floor(progress * points.length);
      const point = points[index];
      this.setState({ position: point });

      if (progress < 1) {
        this.animationId = requestAnimationFrame(animate);
      }
    };

    this.animationId = requestAnimationFrame(animate);
  };

  render() {
    const { position } = this.state;
    return (
      <img
        src={Auto}
        alt="car"
        style={{
          position: 'absolute',
          width: '50px',
          height: '30px',
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    );
  }
}

class SquareRoute extends Component {
  render() {
    return (
      <div
        style={{
          width: '200px',
          height: '200px',
          border: '1px solid black',
          position: 'relative',
        }}
      >
        <Car />
      </div>
    );
  }
}

export default SquareRoute;
