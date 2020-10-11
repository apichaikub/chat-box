import { getElmHeight } from '../../../helpers/dom/getElmHeight';

describe('Unit Test: helpers > getElmHeight', () => {
  it('should be get height of element correctly', () => {
    const div = document.createElement('DIV');
    div.style.height = '300px';
    div.style.marginBottom = '10px';
    div.style.paddingTop = '20px';
    const result = getElmHeight(div, window);
    expect(result).toEqual(330);
  });
});