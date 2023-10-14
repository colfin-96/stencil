import { newE2EPage } from '@stencil/core/testing';

describe('cb-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cb-button></cb-button>');

    const element = await page.find('cb-button');
    expect(element).toHaveClass('hydrated');
  });
});
