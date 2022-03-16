
import Routes from '../Routes/index';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from "react";
import { Route } from "react-router";



describe("<Routes />", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Routes />);
    });
  
    it('debería mostrar <Routes /> correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("Deberia renderizar 6 <Route />", () => {
      expect(wrapper.find(Route)).toHaveLength(6);
    });

    it('La primera ruta debe llevar hacia "/" ', () => {
      
      expect(wrapper.find(Route).at(0).prop("path")).toEqual("/");   
      
    });

    it('La segunda ruta debe llevar hacia "/home" ', () => {
      expect(wrapper.find(Route).at(1).prop("path")).toEqual("/home");      
       
    });
  });