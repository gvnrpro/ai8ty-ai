
import { TonConnectUI } from '@tonconnect/ui-react';

export const TON_PAYMENT_ADDRESS = 'UQCiVNm22dMF9S3YsHPcgrmqXEQHt4MIdk_N7VJu88NrLr4R';

export interface UpgradeOption {
  id: string;
  multiplier: number;
  price: number;
  label: string;
}

export const UPGRADE_OPTIONS: UpgradeOption[] = [
  { id: 'x2', multiplier: 2, price: 0.2, label: 'x2 Speed' },
  { id: 'x5', multiplier: 5, price: 0.5, label: 'x5 Speed' },
  { id: 'x10', multiplier: 10, price: 1, label: 'x10 Speed' },
  { id: 'x25', multiplier: 25, price: 2.5, label: 'x25 Speed' },
  { id: 'x50', multiplier: 50, price: 5, label: 'x50 Speed' },
  { id: 'x120', multiplier: 120, price: 10, label: 'x120 Speed' },
];

export const formatTON = (amount: number): string => {
  return amount.toFixed(2) + ' TON';
};

export const sendTONPayment = async (tonConnectUI: TonConnectUI, amount: number) => {
  try {
    // Create simple transaction without any payload or comment to prevent format errors
    const transaction = {
      validUntil: Math.floor(Date.now() / 1000) + 300, // 5 minutes
      messages: [
        {
          address: TON_PAYMENT_ADDRESS,
          amount: (amount * 1e9).toString(), // Convert to nanoTON
          // No payload or comment to ensure compatibility
        },
      ],
    };

    console.log('Sending simple TON transaction:', transaction);
    const result = await tonConnectUI.sendTransaction(transaction);
    console.log('TON transaction successful:', result);
    return result;
  } catch (error) {
    console.error('TON payment failed:', error);
    throw error;
  }
};
