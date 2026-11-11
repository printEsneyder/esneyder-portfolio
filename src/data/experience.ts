import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 'hsound',
    title: { en: 'HSound — Music Platform (Degree Project)', es: 'HSound — Plataforma Musical (Proyecto de Grado)' },
    organization: 'HSound',
    period: { en: 'Jan 2024 – May 2026', es: 'Enero 2024 – Mayo 2026' },
    type: 'project',
    description: {
      en: [
        'Development of a mobile streaming/discovery platform using Flutter and Firebase.',
        'Implemented authentication, content management, events, favorites and external links.',
      ],
      es: [
        'Desarrollo de plataforma móvil de streaming y descubrimiento con Flutter y Firebase.',
        'Autenticación, gestión de contenidos, eventos, favoritos y enlaces externos.',
      ],
    },
  },
  {
    id: 'sabana',
    title: { en: 'Digital UCI Bedside Sheet — Clinical Support', es: 'Sábana Digital UCI — Apoyo Clínico' },
    organization: 'Proyecto de desarrollo de software',
    period: { en: 'Feb 2026 – Jul 2026', es: 'Febrero 2026 – Julio 2026' },
    type: 'project',
    description: {
      en: ['Clinical modules, Firebase integration, real-time sync, testing, stability, documentation and manuals.'],
      es: ['Módulos clínicos, integración con Firebase, sincronización en tiempo real, pruebas, estabilidad, documentación y manuales.'],
    },
  },
  {
    id: 'fireshots',
    title: { en: 'FireShots POS — Commercial Management System', es: 'FireShots POS — Sistema de Gestión Comercial' },
    organization: 'Proyecto de desarrollo',
    period: { en: '2026', es: '2026' },
    type: 'project',
    description: {
      en: ['Orders, sales, inventory, cloakroom, digital menu, QR tables, kitchen display, roles/users, sync and operational reports (implemented/verified as applicable).'],
      es: ['Pedidos, ventas, inventario, guardarropa, menú digital, mesas QR, pantalla de preparación, roles/usuarios, sincronización y reportes operativos.'],
    },
  },
  {
    id: 'maderalpes',
    title: { en: 'MaderAlpes — Website & Business Admin', es: 'MaderAlpes — Sitio Web y Administración Empresarial' },
    organization: 'Proyecto web',
    period: { en: '2024–2026 (reported)', es: '2024–2026 (referencia)' },
    type: 'project',
    description: {
      en: ['Corporate site, product catalog, services, contact, categories, product/image management, users and admin panel.'],
      es: ['Sitio corporativo, catálogo, servicios, contacto, categorías, gestión de productos/imágenes, usuarios y panel admin.'],
    },
  },
];
