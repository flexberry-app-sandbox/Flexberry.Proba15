import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba15ВакантДолжнLForm from './forms/i-i-s-proba15-вакант-должн-l';
import IISProba15ДолжнСотрLForm from './forms/i-i-s-proba15-должн-сотр-l';
import IISProba15ОрганизацияLForm from './forms/i-i-s-proba15-организация-l';
import IISProba15ПланирСобесLForm from './forms/i-i-s-proba15-планир-собес-l';
import IISProba15РегРезультLForm from './forms/i-i-s-proba15-рег-результ-l';
import IISProba15РегистАнкетыLForm from './forms/i-i-s-proba15-регист-анкеты-l';
import IISProba15СотрудникиLForm from './forms/i-i-s-proba15-сотрудники-l';
import IISProba15ВакантДолжнEForm from './forms/i-i-s-proba15-вакант-должн-e';
import IISProba15ДолжнСотрEForm from './forms/i-i-s-proba15-должн-сотр-e';
import IISProba15ОрганизацияEForm from './forms/i-i-s-proba15-организация-e';
import IISProba15ПланирСобесEForm from './forms/i-i-s-proba15-планир-собес-e';
import IISProba15РегРезультEForm from './forms/i-i-s-proba15-рег-результ-e';
import IISProba15РегистАнкетыEForm from './forms/i-i-s-proba15-регист-анкеты-e';
import IISProba15СотрудникиEForm from './forms/i-i-s-proba15-сотрудники-e';
import IISProba15ВакантДолжнModel from './models/i-i-s-proba15-вакант-должн';
import IISProba15ДолжнСотрModel from './models/i-i-s-proba15-должн-сотр';
import IISProba15ОрганизацияModel from './models/i-i-s-proba15-организация';
import IISProba15ПланирСобесModel from './models/i-i-s-proba15-планир-собес';
import IISProba15РегРезультModel from './models/i-i-s-proba15-рег-результ';
import IISProba15РегистАнкетыModel from './models/i-i-s-proba15-регист-анкеты';
import IISProba15СотрудникиModel from './models/i-i-s-proba15-сотрудники';
import IISProba15ТЧРегРезультModel from './models/i-i-s-proba15-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba15-вакант-должн': IISProba15ВакантДолжнModel,
    'i-i-s-proba15-должн-сотр': IISProba15ДолжнСотрModel,
    'i-i-s-proba15-организация': IISProba15ОрганизацияModel,
    'i-i-s-proba15-планир-собес': IISProba15ПланирСобесModel,
    'i-i-s-proba15-рег-результ': IISProba15РегРезультModel,
    'i-i-s-proba15-регист-анкеты': IISProba15РегистАнкетыModel,
    'i-i-s-proba15-сотрудники': IISProba15СотрудникиModel,
    'i-i-s-proba15-т-ч-рег-результ': IISProba15ТЧРегРезультModel
  },

  'application-name': 'Menu',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Menu',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Menu',
          title: 'Menu'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'информация-об-организации': {
          caption: 'Информация об организации',
          title: 'Информация об организации',
          'i-i-s-proba15-вакант-должн-l': {
            caption: 'Вакант должн',
            title: ''
          },
          'i-i-s-proba15-организация-l': {
            caption: 'Организация',
            title: ''
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-proba15-рег-результ-l': {
            caption: 'РегРезультL',
            title: 'Рег результ'
          },
          'i-i-s-proba15-планир-собес-l': {
            caption: 'ПланирСобесL',
            title: 'Планир собес'
          },
          'i-i-s-proba15-регист-анкеты-l': {
            caption: 'РегистАнкетыL',
            title: 'Регист анкеты'
          }
        },
        'информация-о-сотрудниках': {
          caption: 'Информация о сотрудниках',
          title: 'Информация о сотрудниках',
          'i-i-s-proba15-должн-сотр-l': {
            caption: 'ДолжнСотрL',
            title: 'Должн сотр'
          },
          'i-i-s-proba15-сотрудники-l': {
            caption: 'СотрудникиL',
            title: 'Сотрудники'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba15-вакант-должн-l': IISProba15ВакантДолжнLForm,
    'i-i-s-proba15-должн-сотр-l': IISProba15ДолжнСотрLForm,
    'i-i-s-proba15-организация-l': IISProba15ОрганизацияLForm,
    'i-i-s-proba15-планир-собес-l': IISProba15ПланирСобесLForm,
    'i-i-s-proba15-рег-результ-l': IISProba15РегРезультLForm,
    'i-i-s-proba15-регист-анкеты-l': IISProba15РегистАнкетыLForm,
    'i-i-s-proba15-сотрудники-l': IISProba15СотрудникиLForm,
    'i-i-s-proba15-вакант-должн-e': IISProba15ВакантДолжнEForm,
    'i-i-s-proba15-должн-сотр-e': IISProba15ДолжнСотрEForm,
    'i-i-s-proba15-организация-e': IISProba15ОрганизацияEForm,
    'i-i-s-proba15-планир-собес-e': IISProba15ПланирСобесEForm,
    'i-i-s-proba15-рег-результ-e': IISProba15РегРезультEForm,
    'i-i-s-proba15-регист-анкеты-e': IISProba15РегистАнкетыEForm,
    'i-i-s-proba15-сотрудники-e': IISProba15СотрудникиEForm
  },

});

export default translations;
