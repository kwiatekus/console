import React from 'react';
import renderer from 'react-test-renderer';
import BottomToolbar from './../BottomToolbar';

describe('BottomToolbar', () => {
  it('Renders with minimal props', () => {
    const component = renderer.create(
      <BottomToolbar
        updateFilteringState={() => {}}
        sortDirection="ascending"
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
