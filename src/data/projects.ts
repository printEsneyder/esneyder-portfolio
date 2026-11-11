import type { Project } from '../types';

import hsoundAprobaciones from '../assets/images/projects/hsound/aprobaciones.png';
import hsoundCanciones from '../assets/images/projects/hsound/canciones.png';
import hsoundDashboard from '../assets/images/projects/hsound/dashboard.png';
import hsoundFull from '../assets/images/projects/hsound/image full.png';
import hsoundUsuarios from '../assets/images/projects/hsound/usuarios.png';

import fireshotsMenu from '../assets/images/projects/fireshots/menu fireshots.png';
import fireshotsCarrito from '../assets/images/projects/fireshots/carrito fireshots.png';
import fireshotsRecibo from '../assets/images/projects/fireshots/recibo fireshots.png';
import fireshotsReportes from '../assets/images/projects/fireshots/reportes-ventas fireshots.png';
import fireshotsDashboard from '../assets/images/projects/fireshots/admin-dashboard fireshots.png';

import sabanaLogin from '../assets/images/projects/sabana uci/login.png';
import sabanaIngresos from '../assets/images/projects/sabana uci/ingresos.png';
import sabanaIngresoDetalle from '../assets/images/projects/sabana uci/ingreso-detalle.png';
import sabanaRegistroDiario from '../assets/images/projects/sabana uci/registro-diario.png';
import sabanaGlasgow from '../assets/images/projects/sabana uci/glasgow.png';
import sabanaNutricion from '../assets/images/projects/sabana uci/nutricion.png';
import sabanaMonitoria from '../assets/images/projects/sabana uci/monitoria.png';
import sabanaObservaciones from '../assets/images/projects/sabana uci/observaciones-firmas.png';
import sabanaReportePdf from '../assets/images/projects/sabana uci/reporte-pdf.png';

import maderalpesPortada from '../assets/images/projects/maderalpes/portada.png';
import maderalpesCatalogo from '../assets/images/projects/maderalpes/catalogo.png';
import maderalpesNosotros from '../assets/images/projects/maderalpes/nosotros.png';
import maderalpesContacto from '../assets/images/projects/maderalpes/contacto.png';
import maderalpesUbicacion from '../assets/images/projects/maderalpes/ubicacion.png';
import maderalpesCategorias from '../assets/images/projects/maderalpes/panel-categorias.png';
import maderalpesProductos from '../assets/images/projects/maderalpes/panel-productos.png';
import maderalpesResumen from '../assets/images/projects/maderalpes/panel-resumen.png';
import maderalpesUsuarios from '../assets/images/projects/maderalpes/panel-usuarios.png';

import adipBanner from '../assets/images/projects/academic data/banner academic data.png';

export const projects: Project[] = [
  {
    id: 'hsound',
    slug: 'hsound',
    name: 'HSound — Plataforma musical',
    category: 'mobile',
    featured: true,
    description: {
      en: 'Mobile platform for promoting local music talent in Pasto and Nariño, with streaming and discovery features.',
      es: 'Plataforma móvil para promover el talento musical de Pasto y Nariño con funciones de streaming y descubrimiento.',
    },
    problem: {
      en: 'Limited visibility for local artists and difficulty discovering regional music events.',
      es: 'Limitada visibilidad de artistas locales y dificultad para descubrir eventos musicales regionales.',
    },
    contribution: {
      en: 'Development of mobile features with Flutter and Firebase (auth, content, events, favorites, external links).',
      es: 'Desarrollo de funcionalidades móviles con Flutter y Firebase (auth, contenido, eventos, favoritos, enlaces externos).',
    },
    technologies: ['Flutter', 'Dart', 'Firebase Authentication', 'Cloud Firestore', 'Firebase Storage', 'Firebase Hosting'],
    result: {
      en: 'Web admin demo available; APK resources available for distribution.',
      es: 'Demo web administrativa disponible; recursos de APK disponibles para distribución.',
    },
    repo: undefined,
    demo: 'https://hsound-8aad2.web.app',
    images: [hsoundFull, hsoundDashboard, hsoundCanciones, hsoundAprobaciones, hsoundUsuarios],
    tags: ['Featured', 'Mobile', 'Firebase'],
  },
  {
    id: 'fireshots',
    slug: 'fireshots-pos',
    name: 'FireShots POS — Sistema de gestión comercial',
    category: 'web',
    featured: true,
    description: {
      en: 'Web-based POS supporting orders, sales, inventory, menu and kitchen operations.',
      es: 'Sistema POS web para gestionar pedidos, ventas, inventario, menú y operaciones de cocina.',
    },
    problem: { en: 'Need to organize commercial operations efficiently.', es: 'Necesidad de organizar operaciones comerciales de forma eficiente.' },
    contribution: { en: 'Implementation of core modules (orders, sales, inventory, tables/QR, kitchen display, roles).', es: 'Implementación de módulos (pedidos, ventas, inventario, mesas/QR, pantalla de preparación, roles).' },
    technologies: ['Flutter Web', 'Dart', 'Firebase Authentication', 'Cloud Firestore'],
    images: [fireshotsMenu, fireshotsCarrito, fireshotsRecibo, fireshotsReportes, fireshotsDashboard],
    tags: ['POS', 'Web', 'Firebase'],
  },
  {
    id: 'sabana',
    slug: 'sabana-digital-uci',
    name: 'Sábana Digital UCI — Aplicación de apoyo clínico',
    category: 'mobile',
    featured: true,
    description: {
      en: 'Mobile app to support nursing record/documentation in ICU settings.',
      es: 'Aplicación móvil para apoyar registros y documentación de enfermería en UCI.',
    },
    problem: { en: 'Reduce time spent on manual ICU nursing records.', es: 'Reducir el tiempo de registro manual en UCI.' },
    contribution: { en: 'Clinical modules, Firebase integration, real-time sync, testing, stability, docs/manuals.', es: 'Módulos clínicos, integración Firebase, sync tiempo real, pruebas, estabilidad, docs y manuales.' },
    technologies: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    result: { en: 'Referenced impact: 15+ nursing professionals; ~40% reduction in recording time (as reported).', es: 'Impacto referenciado: 15+ profesionales de enfermería; reducción ~40% en tiempo de registro (según reporte).' },
    repo: 'https://github.com/printEsneyder/sabana-digital-enfermeria-uci',
    images: [sabanaLogin, sabanaIngresos, sabanaIngresoDetalle, sabanaRegistroDiario, sabanaGlasgow, sabanaNutricion, sabanaMonitoria, sabanaObservaciones, sabanaReportePdf],
    tags: ['Healthcare', 'Mobile'],
  },
  {
    id: 'maderalpes',
    slug: 'maderalpes',
    name: 'MaderAlpes — Sitio web y administración empresarial',
    category: 'web',
    description: { en: 'Corporate site + admin for wood products company.', es: 'Sitio corporativo + admin para empresa de madera.' },
    problem: { en: 'Need for web presence and product management.', es: 'Necesidad de presencia web y gestión de productos.' },
    contribution: { en: 'Corporate pages, catalog, services, contact, categories, product/image management, users, admin panel.', es: 'Páginas corporativas, catálogo, servicios, contacto, categorías, gestión productos/imágenes, usuarios, panel admin.' },
    technologies: ['Laravel', 'PHP', 'Blade', 'Bootstrap', 'Tailwind CSS', 'SQLite', 'Vite', 'JavaScript'],
    repo: 'https://github.com/printEsneyder/maderalpes-sistema-web',
    images: [maderalpesPortada, maderalpesCatalogo, maderalpesNosotros, maderalpesContacto, maderalpesUbicacion, maderalpesCategorias, maderalpesProductos, maderalpesResumen, maderalpesUsuarios],
    tags: ['Laravel', 'Web'],
  },
  {
    id: 'adip',
    slug: 'academic-data-integration-platform',
    name: 'Academic Data Integration Platform',
    category: 'web',
    description: { en: 'Academic project for integrating data from multiple sources.', es: 'Proyecto académico para integrar datos de diferentes fuentes.' },
    problem: { en: 'Fragmented academic data across sources.', es: 'Datos académicos fragmentados entre fuentes.' },
    contribution: { en: 'Data services, integration, CSV processing, storage/components exploration.', es: 'Servicios de datos, integración, procesamiento CSV y componentes explorados.' },
    technologies: ['Node.js', 'Express', 'TypeScript', 'React', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'],
    repo: 'https://github.com/printEsneyder/academic-data-integration-platform',
    images: [adipBanner],
    tags: ['Academic', 'Fullstack'],
  },
];
