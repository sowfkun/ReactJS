import React from 'react';

import Accordion from '../components/accordion/Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Heading',
  content: 'Content',
  children: 'Child Content',
  isCollapsed: true,
};
