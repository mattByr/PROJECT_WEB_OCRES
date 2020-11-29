import React from 'react';

import { Button } from './Button';
import WidgetChrono from '../components/WidgetChrono/WidgetChrono';
import WidgetDistribution from '../components/WidgetDistribution/WidgetDistribution';
import WidgetLastUsers from '../components/WidgetLastUsers/WidgetLastUsers';
import WidgetNumberProducts from '../components/WidgetNumberProducts/WidgetNumberProducts';
import WidgetNumberUsers from '../components/WidgetNumberUsers/WidgetNumberUsers';
import WidgetSocialMedia from '../components/WidgetSocialMedia/WidgetSocialMedia';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const mll = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const widget1 = () =><WidgetChrono />;
export const widget2 = () =><WidgetDistribution />;
export const widget3 = () =><WidgetLastUsers />;
export const widget4 = () =><WidgetNumberProducts />;
export const widget5 = () =><WidgetNumberUsers />;
export const widget6 = () =><WidgetSocialMedia />;