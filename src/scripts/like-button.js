/* globals React */

const { createElement: _createElement } = React;
const createElement =  _createElement.bind(React);

// <LikeButton></LikeButton>
export class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return createElement(
      'LikeButton',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
  
}

// const domContainer = document.querySelector('#app');
// const root = ReactDOM.createRoot(domContainer);
// root.render(createElement(LikeButton));

