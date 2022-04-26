import React from 'react';
import { mount } from 'enzyme';
import { create } from "react-test-renderer"
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

// PARA USAR SNAPSHOTS DEBEMOS CONVERTIR EL COMPONENTE EN UN OBJETO JSON
describe("Footer snapshot", () => {
  test("Comprobar la ui del componente footer", () => {
    const footer = create(<Footer/>)
    expect(footer).toMatchSnapshot()
  });
});
