import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Login from '../components/Login';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('---Login---',()=>{
    it('has a email input',()=>{
        const wrapper = shallow(<Login/>);
        expect(wrapper.containsMatchingElement(<input type="email"/>)).to.be.true;
    });

    it('has a password input',()=>{
        const wrapper = shallow(<Login/>);
        expect(wrapper.containsMatchingElement(<input type="password"/>)).to.be.true;
    });

    it('has a password input',()=>{
        const wrapper = shallow(<Login/>);
        expect(wrapper.containsMatchingElement(<button type="submit">Login</button>)).to.be.true;
    });

    it('passes login information',()=>{
        const email = 'a@b.com';
        const password = 'Bh@123456';
        const wrapper = shallow(<Login handleLogin={state=>{
            expect(state.email).to.be.equal(email);
            expect(state.password).to.be.equal(password);
        }} />);
        wrapper.setState({email:'a@b.com',password:'Bh@123456'});
        wrapper.find('button').simulate('click');
    });

    it('passes login information',()=>{
        const email = 'a@a.com';
        const password = 'Bh@123456';
        const wrapper = shallow(<Login handleLogin={state=>{
            expect(state.email).to.be.equal(email);
            expect(state.password).to.be.equal(password);
        }} />);
        wrapper.setState({email:'a@a.com',password:'Bh@123456'});
        wrapper.find('button').simulate('click');
    });

    it('passes login information',()=>{
        const email = 'rty@trry.com';
        const password = 'h@1236';
        const wrapper = shallow(<Login handleLogin={state=>{
            expect(state.email).to.be.equal(email);
            expect(state.password).to.be.equal(password);
        }} />);
        wrapper.setState({email:'rty@trry.com',password:'h@1236'});
        wrapper.find('button').simulate('click');
    });
});