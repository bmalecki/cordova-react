import * as React from "react";
import {assert, expect, use} from 'chai';
import { mount, shallow } from 'enzyme';
import * as chaiEnzyme from 'chai-enzyme';

import {Footer} from '../components/Footer';

use(chaiEnzyme());


const Test = () => <div className="test"/>;

class Test2 extends React.Component<{}, {}> {
    render() {
        return <div/>;
    }
}

const wrapper = shallow(<Test />);


describe('Footer', () => {
  it('should be a function', () => {
    assert.isFunction(Footer);
  })
})

describe('test react with chai', () => {
  it('run exmaple code', () => {
    expect(wrapper).to.be.not.null;
    expect(wrapper).to.be.checked;
    expect(wrapper).to.have.className("test");
    expect(wrapper).to.not.have.exactly(1).descendants(Test2);
  })
  
})
