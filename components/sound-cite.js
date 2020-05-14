const React = require('react');

class SoundCite extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
    <span className="soundcite" data-id={props.id} data-start={props.start} data-end={props.end} data-plays="1">listen</span>
    );
  }
}

module.exports = SoundCite;
