# 🛒 Pre-Entrega Proyecto - Gestión de Productos con FakeStore API

Este proyecto es una **pre-entrega** desarrollada en Node.js para manejar productos de una tienda en línea desde la **terminal**.  
El sistema se conecta a la [FakeStore API](https://fakestoreapi.com/) y permite consultar, crear y eliminar productos.

---

## 📦 Requisitos previos
- Tener instalado **Node.js** (versión 18 o superior).  
- No es necesario instalar dependencias externas, ya que el proyecto usa las APIs nativas de Node.

---

## 🚀 Instalación y configuración

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. **Inicializar Node.js (solo la primera vez)**:
   ```bash
   npm install
   ```
Este paso genera la carpeta node_modules/ y el archivo package-lock.json.
No se instala ninguna dependencia adicional.

3. **Ejecutar el programa**:
   ```bash
   npm run start <comando>
   ```

---

## 🛠️ Comandos disponibles

🔍 **Obtener todos los productos**
   ```bash
   npm run start GET products
   ```

🔍 **Obtener un producto por ID**
   ```bash
   npm run start GET products <id>
   ```

Ejemplo:
   ```bash
   npm run start GET products 5
   ```

➕ **Crear un producto**
   ```bash
   npm run start POST products <title> <price> <category>
   ```

Ejemplo:
   ```bash
   npm run start POST products "T-Shirt-Rex" 300 remeras
   ```

🗑️ **Eliminar un producto**
   ```bash
   npm run start DELETE products/<id>
   ```
Ejemplo:
   ```bash
   npm run start DELETE products/7
   ```

---

## 📝 Notas
- El proyecto está pensado como ejercicio de integración: uso de process.argv, fetch nativo de Node y organización modular.
- FakeStore API es un servicio de prueba: los productos creados o eliminados no son persistentes y se reinician con el tiempo.

---

👨‍💻 **Autor**: Fernando Blanco

---