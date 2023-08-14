import type { Preview} from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

if (process.env.NODE_ENV === 'development') {
  debugger
  const { worker } = await import('../src/mocks/browser')
  worker.start()
}

export default preview;
