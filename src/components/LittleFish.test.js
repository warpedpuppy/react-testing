import React from 'react';
import ReactDOM from 'react-dom';
import Fish from './BigFish';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

describe( 'smoke tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Fish />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
})

describe( 'snapshot tests', () => {
    it('renders the UI as expected', () => {
      const wrapper = shallow(<Fish />)
      expect(toJson(wrapper)).toMatchSnapshot()
    });
})

describe( 'event listener tests', () => {
  it('closes the first tab and opens any clicked tab', () => {
    const wrapper = shallow(<Fish />)
    wrapper.simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})