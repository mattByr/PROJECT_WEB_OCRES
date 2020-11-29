import React from 'react';
import WidgetChrono from '../components/WidgetChrono/WidgetChrono';
import WidgetDistribution from '../components/WidgetDistribution/WidgetDistribution';
import WidgetLastUsers from '../components/WidgetLastUsers/WidgetLastUsers';
import WidgetNumberProducts from '../components/WidgetNumberProducts/WidgetNumberProducts';
import WidgetNumberUsers from '../components/WidgetNumberUsers/WidgetNumberUsers';
import WidgetSocialMedia from '../components/WidgetSocialMedia/WidgetSocialMedia';



export default {
  title: 'Example/Widget',
  
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};



export const widget1 = () =><WidgetChrono />;
export const widget2 = () =><WidgetDistribution />;
export const widget3 = () =><WidgetLastUsers />;
export const widget4 = () =><WidgetNumberProducts />;
export const widget5 = () =><WidgetNumberUsers />;
export const widget6 = () =><WidgetSocialMedia />;

