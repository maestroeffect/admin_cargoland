// project settings, you can change only PROJECT_NAME, BASE_URL and WEBSITE_URL otherwise it can break the app
export const PROJECT_NAME = 'Cargoland Foods';
export const BASE_URL =
  process.env.REACT_APP_BASE_URL || 'https://server.cargolandfood.com';
export const WEBSITE_URL = 'https://cargolandfood.com';
export const api_url = BASE_URL + '/api/v1/';
export const api_url_admin = BASE_URL + '/api/v1/dashboard/admin/';
export const api_url_admin_dashboard = BASE_URL + '/api/v1/dashboard/';
export const IMG_URL = '';
export const export_url = BASE_URL + '/storage/';
export const example = BASE_URL + '/';

// map api key, ypu can get it from https://console.cloud.google.com/apis/library
export const MAP_API_KEY = 'AIzaSyChJm_uOFkfVt2_bn-qE3tnQuJ3ZF1p-eE';

// firebase keys, do not forget to change to your own keys here and in file public/firebase-messaging-sw.js
export const VAPID_KEY =
  'BP5Ko-DEIkrUuU2n5Ta_FEfAN_2jplA0YuPan4Na8kbY84GyCmTRm-EJL8fShGKogG3RJe2WqyM0M-1WtuZtnaI';
export const API_KEY = 'AIzaSyBX35h8ydXcTZlrzAN90JAUuIkThS-yHgw';
export const AUTH_DOMAIN = 'cargolandfoods-a42f8.firebaseapp.com';
export const PROJECT_ID = 'cargolandfoods-a42f8';
export const STORAGE_BUCKET = 'cargolandfoods-a42f8.firebasestorage.app';
export const MESSAGING_SENDER_ID = '93074006303';
export const APP_ID = '1:93074006303:web:0105805689601cbbbf902a';
export const MEASUREMENT_ID = 'G-46SQRZF8YY';

// recaptcha key, you can get it from https://www.google.com/recaptcha/admin/create
export const RECAPTCHASITEKEY = '6LeXA-EqAAAAAAY6CDGDA7SCTIZr3PbGG5NyqUYy';

// demo data, no need to change
export const LAT = 47.4143302506288;
export const LNG = 8.532059477976883;
export const DEMO_SELLER = 334; // seller_id
export const DEMO_SELLER_UUID = '3566bdf6-3a09-4488-8269-70a19f871bd0'; // seller_id
export const DEMO_SHOP = 599; // seller_id
export const DEMO_DELIVERYMAN = 375; // deliveryman_id
export const DEMO_MANEGER = 114; // deliveryman_id
export const DEMO_MODERATOR = 297; // deliveryman_id
export const DEMO_ADMIN = 107; // deliveryman_id
export const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/svg',
];
