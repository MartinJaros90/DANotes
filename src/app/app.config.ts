import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-5ae8b","appId":"1:542395840790:web:eb84faceadaa026eb13837","storageBucket":"danotes-5ae8b.firebasestorage.app","apiKey":"AIzaSyAEbVbzKDgvWK2CsB19Z9xlL3DaBsy9ZVU","authDomain":"danotes-5ae8b.firebaseapp.com","messagingSenderId":"542395840790"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
