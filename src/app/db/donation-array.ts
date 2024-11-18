export interface PledgeOptions {
  id: number;
  title: string;
  pledge: string;
  description: string;
  amount: number;
  amountPlans: number;
  buttonLabel: string;
  price: null | number;
}

export const pledgeOptions: PledgeOptions[] = [
  {
    id: 1,
    title: 'Pledge with no reward',
    pledge: ' ',
    amountPlans: 0,
    description:
      'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
    amount: 0,
    buttonLabel: 'Enter your pledge',
    price: null,
  },
  {
    id: 2,
    title: 'Bamboo Stand',
    pledge: 'Pledge $ 25 or more',
    amountPlans: 25,
    description:
      'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    amount: 25,
    buttonLabel: 'Continue',
    price: 200,
  },
  {
    id: 3,
    title: 'Black Edition Stand',
    pledge: 'Pledge $ 75 or more',
    amountPlans: 75,
    description:
      'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    amount: 75,
    buttonLabel: 'Continue',
    price: 200,
  },
  {
    id: 4,
    title: 'Mahogany Special Edition',
    amountPlans: 200,
    pledge: 'Pledge $ 200 or more',
    description:
      'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    amount: 200,
    buttonLabel: 'Continue',
    price: 80,
  },
];
