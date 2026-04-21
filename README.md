<div align="center">
  <!-- Puedes reemplazar esta imagen por el logo real de ForceGym cuando lo tengas -->
  <h1>🏋️‍♂️ ForceGym Web</h1>

  <p>
    <strong>Una plataforma moderna, rápida y dinámica para la gestión y presentación de un gimnasio.</strong>
  </p>

  <p>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  </p>
</div>

---

## 📖 Sobre el Proyecto

**ForceGym** es una aplicación web (Landing Page / Sitio Web Corporativo) desarrollada para un centro de entrenamiento. Su objetivo principal es brindar una experiencia de usuario atractiva, intuitiva y fluida donde los visitantes puedan descubrir:

- 📋 **Planes de entrenamiento** y membresías.
- 🧘‍♂️ **Clases disponibles** y horarios.
- 📸 **Galería de instalaciones** del gimnasio.
- 📍 **Información de contacto** y ubicación.

Todo el proyecto ha sido construido desde cero con un fuerte enfoque en el diseño UI/UX moderno, animaciones atractivas, rendimiento y buenas prácticas de desarrollo.

---

## ✨ Características Principales

- 📱 **Diseño 100% Responsivo:** Adaptable perfectamente a dispositivos móviles, tablets y pantallas de escritorio gracias a **Tailwind CSS**.
- ⚡ **Rendimiento Ultrarrápido:** Configurado con **Vite** para tiempos de carga, construcción y *Hot Module Replacement* casi instantáneos.
- 🎨 **Animaciones Fluidas:** Interfaz dinámica e interactiva que mejora la experiencia de usuario, implementada con **Framer Motion**.
- 🖼️ **Carruseles Integrados:** Navegación por imágenes de las instalaciones y destacados utilizando **Swiper**.
- 🧭 **Navegación Eficiente (SPA):** Enrutamiento del lado del cliente rápido y sin recargas de página manejado por **React Router DOM**.
- 🛡️ **Arquitectura Robusta:** Tipado seguro con **TypeScript** y estructura de carpetas escalable (Feature-Sliced Design simplificado).

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Librería Principal:** [React 19](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler / Build Tool:** [Vite](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)

### UI y Animaciones
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Componentes de Galería:** [Swiper](https://swiperjs.com/)
- **Iconos:** [React Icons](https://react-icons.github.io/react-icons/)

---

## 🚀 Instalación y Uso Local

Sigue estos pasos para correr el proyecto en tu entorno local de desarrollo:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/MatiasNZamora/ForceGym-web.git
   cd ForceGym-web
   ```

2. **Instalar las dependencias:**
   Puedes usar `npm`, `yarn` o `pnpm`. Aquí el ejemplo con `npm`:
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Ver la aplicación:**
   Abre tu navegador web y visita `http://localhost:5173` (o el puerto que Vite te indique).

---

## 📂 Estructura del Proyecto

```text
src/
├── assets/         # Imágenes, iconos y otros recursos estáticos
├── components/     # Componentes compartidos y reutilizables (ui, layout, etc.)
├── features/       # Módulos específicos por funcionalidad (ej: home)
├── pages/          # Páginas principales (Home, Clases, Planes, Contacto, Instalaciones)
├── routes/         # Configuración de rutas (React Router)
├── types/          # Definiciones de tipos TypeScript globales
├── App.tsx         # Componente raíz que envuelve las rutas
├── index.css       # Estilos globales y configuración de Tailwind
└── main.tsx        # Punto de entrada principal de React
```

---

## 🤝 Próximos Pasos (To-Do)

- [ ] Conexión con un backend / API para gestión de usuarios.
- [ ] Implementación de pasarela de pagos para las membresías.
- [ ] Panel de administración (Dashboard) para el staff del gimnasio.

---

<div align="center">
  <i>Desarrollado con pasión para transformar la presencia digital en la industria del fitness.</i><br/><br/>
  Hecho con ❤️ por <a href="https://github.com/MatiasNZamora">Matias N. Zamora</a>
</div>
