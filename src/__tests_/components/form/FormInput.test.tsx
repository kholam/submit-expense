import React from 'react';
import { configure, mount } from 'enzyme'; 
import { FormInput } from '../../../components/form';
import Adapter from "enzyme-adapter-react-16";

// set up enzyme
configure({ adapter: new Adapter() });

it('renders text input with label title', () => {
    const wrapper = mount(<FormInput name="title" type="text" />);
    const label = wrapper.find('label');
    expect(label).toHaveLength(4);
    expect(label.text()).toEqual('Title');

    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('title');
});

// run more test