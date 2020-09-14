import React from 'react';

// props being passed
// sections

export default class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  }

  state = {
    currentIndex: null
  }

  setActiveIndex = (index) => {
    this.setState({currentIndex: index})
  }

  gatherAccordionButtons(section, index, currentIndex) {
    return (
      <li key={index}>
        <button 
          type='button'
          onClick={() => {this.setActiveIndex(index)}}
          >
          {section.title}
        </button>
        {(currentIndex === index) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const { currentIndex } = this.state
    const { sections } = this.props
    console.log(sections)
    return (
      <div>
        <ul>
          {sections.map((sections, idx) =>
            this.gatherAccordionButtons(sections, idx, currentIndex)
          )}
        </ul>
      </div>
    )
  }
}