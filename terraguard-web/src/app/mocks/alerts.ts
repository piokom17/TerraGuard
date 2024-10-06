import { Alert } from '../model/alert';

export const alerts: Alert[] = [
  {
    code: 'bamboo_forest',
    type: 'alert',
    text: "🚨 Alert! A deadly disease is infecting the bamboo forest! 🌿 The pandas' primary food source is rapidly dying. If you don't act fast, they will starve! 🛠 Your Mission: Stop the spread of the blight by isolating infected areas. Monitor the pandas closely, or they won’t survive this crisis! ⏳ Time is running out! Save the pandas before it's too late! 🐼",
    title: 'NEWS: Bamboo Blight',
    withMap: true,
    actions: [
      {
        caption: 'Try to save! Go!',
        switchMapTo: '2d',
        navigateTo: [35.009392, 135.667007],
        alert: 'bamboo_quiz',
        points: 0,
      },
    ],
  },
  {
    code: 'bamboo_quiz',
    type: 'quiz',
    title: 'How you can save pandas from starving?',
    choices: [
      {
        text: 'Block off sections of the forest where the blight has spread to prevent it from reaching other bamboo. cost - 50 points',
        title: 'Quarantine Infected Areas',
        cost: 50,
      },
      {
        title: 'Deploy Scientists',
        text: 'Send a team of researchers to investigate the cause of the blight and develop a cure. COST - 100 points',
        cost: 50,
      },
      {
        title: 'Ignore the Blight',
        text: 'Choose not to take any action. The disease will continue to spread, and the pandas may face starvation. COST - 0 points',
        cost: 0,
      },
      {
        title: 'Replant Healthy Bamboo',
        text: 'Begin replanting new, blight-resistant bamboo in areas where the disease has been cleared. COST - 75 points',
        cost: 75,
      },
    ],
  },
  {
    code: 'radiation_leak',
    type: 'danger',
    title: 'Nuclear power plant',
    text:
      '\n' +
      'Radiation Leak\n' +
      '\n' +
      'Initiate widespread public health and safety measures. International collaboration for containment, emergency aid deployment',
    actions: [{ caption: 'Take action' }],
  },
];
