export interface Plan {
  title: string;
  pledge: string;
  description: string;
  price: number;
  buttonText: string;
  isAvailable: boolean;
}

export const planArray: Plan[] = [
  {
    title: 'Bamboo Stand',
    pledge: 'Pledge $25 or more',
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    price: 101,
    buttonText: 'Select Reward',
    isAvailable: true,
  },
  {
    title: 'Black Edition Stand',
    pledge: 'Pledge $75 or more',
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    price: 64,
    buttonText: 'Select Reward',
    isAvailable: true,
  },
  {
    title: 'Mahogany Special Edition',
    pledge: 'Pledge $200 or more',
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    price: 0,
    buttonText: 'Out of stock',
    isAvailable: false,
  },
];
