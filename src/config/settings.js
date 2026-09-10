/* ============================================================
   GLOBAL CONFIGURATION & CONSTANTS
   ============================================================ */

export const PAYPAL_DONATE_URL = 'https://paypal.me/pagamejpygael';

export const SUPPORT_CONFIG = {
  currency: 'MXN',
  paypalMeUrl: PAYPAL_DONATE_URL,
  tiers: [
    { id: 'tier-50', amount: 50, label: '$50 MXN' },
    { id: 'tier-100', amount: 100, label: '$100 MXN', default: true },
    { id: 'tier-200', amount: 200, label: '$200 MXN' },
    { id: 'tier-custom', amount: null, label: 'Monto libre' }
  ],
  title: 'Apoya a Modena Lines',
  message: 'Modena Lines es un proyecto independiente creado para la comunidad de ajedrez. Tu apoyo voluntario ayuda a mantener los servidores rápidos, actualizados y 100% libres de publicidad.',
  footer: 'Pago seguro procesado por PayPal. Contribución 100% voluntaria.'
};

export const APP_CONFIG = {
  appName: 'Modena Lines',
  subtitle: 'Italian Game Repertoire Trainer',
  storageKey: 'modena_lines_v3_state',
  paypalDonateUrl: PAYPAL_DONATE_URL,
  supportConfig: SUPPORT_CONFIG,
  blackDelayMs: 300,
  blackMoveSpeed: 400,
  toastDurationMs: 2500,
  defaultOrientation: 'white'
};

