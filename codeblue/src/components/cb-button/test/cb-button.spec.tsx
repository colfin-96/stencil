import { newSpecPage } from '@stencil/core/testing';
import { CbButton } from '../cb-button';

describe('cb-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CbButton],
      html: `<cb-button></cb-button>`,
    });
    expect(page.root).toEqualHtml(`
      <cb-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cb-button>
    `);
  });
});
