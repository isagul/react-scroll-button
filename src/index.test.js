import React from 'react';
import { fireEvent, screen, waitFor, render } from '@testing-library/react';

import ScrollButton from './index';
import { act } from 'react-dom/test-utils';

describe('Scroll Button Main Features', () => {
  test('it should not be visible when first rendered', () => {
    render(
      <div>
        <ScrollButton />
      </div>,
    );

    const component = screen.queryByTestId('scrollButton');

    expect(component).toBe(null);
  });

  test('it should be visible when scrolled', () => {
    render(
      <div>
        <ScrollButton />
      </div>,
    );

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 51 } });
    });

    const component = screen.queryByTestId('scrollButton');

    expect(component).not.toBe(null);
  });

  test('it should be scrolled where given element', () => {
    render(
      <div>
        <div data-testid="targetBox" id="targetBox"></div>
        <ScrollButton targetId="targetBox" />
      </div>,
    );

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 51 } });
    });

    const component = screen.queryByTestId('scrollButton');

    expect(component).not.toBe(null);

    window.HTMLElement.prototype.scrollIntoView = jest.fn();

    act(() => {
      fireEvent.click(component);
    });

    waitFor(() => {
      expect(component).toBe(null);
    });
  });
});

describe('Scroll Button Styling and Icon Check', () => {
  test('it should be rendered with given styles ', () => {
    render(
      <div>
        <ScrollButton style={{ height: '40px' }} />
      </div>,
    );

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 51 } });
    });

    const component = screen.queryByTestId('scrollButton');
    const styles = getComputedStyle(component);

    expect(styles.color).toBe('white');
    expect(styles.backgroundColor).toBe('green');
    expect(styles.height).toBe('40px');
  });
});

describe('Scroll Button Props Check', () => {
  test('it should be rendered with the given icon name', async () => {
    render(
      <div>
        <ScrollButton />
      </div>,
    );

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 51 } });
    });

    const component = screen.queryByTestId('scrollButton');
    const spanElement = component.querySelector('span');
    expect(spanElement.classList.contains('anticon-up')).toEqual(true);
  });

  test('buttonVisibleHeight should be work as expected', async () => {
    render(
      <div>
        <ScrollButton buttonVisibleHeight={100} />
      </div>,
    );

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 100 } });
    });

    const firstComponent = screen.queryByTestId('scrollButton');
    expect(firstComponent).toBe(null);

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 101 } });
    });

    const secondComponent = screen.queryByTestId('scrollButton');

    expect(secondComponent).not.toBe(null);
  });
});
