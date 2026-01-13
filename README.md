# 📈 Binance Market Bot (NestJS + Hexagonal Architecture)

Este proyecto es una **plataforma de análisis y monitoreo de mercados en tiempo real** construida con **NestJS** siguiendo **Arquitectura Hexagonal (Ports & Adapters)**.

Integra:

- **Binance** (REST + WebSocket) para datos de mercado
- **Telegram Bot** para interacción en tiempo real
- **DeepSeek** para análisis de mercado basado en datos

El objetivo principal es **consultar precios, escuchar mercados en tiempo real y generar análisis**, todo desacoplado y escalable.

---

## 🧠 Arquitectura General

La aplicación está organizada en **capas bien definidas**:

```
┌──────────────────────────┐
│      Infraestructura     │
│  (Controllers / WS / Bot)│
└──────────▲───────────────┘
           │
┌──────────┴───────────────┐
│        Aplicación        │
│        (Use Cases)       │
└──────────▲───────────────┘
           │
┌──────────┴───────────────┐
│          Dominio         │
│     (Ports / Entities)   │
└──────────────────────────┘
```

### 🔹 Dominio

- Define **contratos (Ports)**
- No depende de frameworks ni APIs externas

### 🔹 Aplicación

- Contiene los **casos de uso**
- Orquesta la lógica del negocio

### 🔹 Infraestructura

- Implementaciones concretas:
  - Binance REST
  - Binance WebSocket
  - Telegram Bot
  - DeepSeek API

---

## 🔌 Integraciones

### 🟡 Binance

#### REST API

- Obtener precios actuales
- Obtener últimos trades
- Obtener order book

**Endpoints:**

```
/binance/:symbol/price
/binance/:symbol/trades
/binance/:symbol/order-book
```

#### WebSocket (Tiempo real)

- Escucha precios en tiempo real
- Controlado bajo demanda (no siempre activo)

---

### 🟣 DeepSeek

Servicio de **análisis de mercado** que combina:

- Datos de Binance
- Procesamiento inteligente

**Endpoint:**

```
/deepseek/:symbol/analyze
```

---

### 🟢 Telegram Bot

Permite interactuar con el sistema desde Telegram.

#### Comandos disponibles:

```
/start        → Inicia el bot
/help         → Ayuda
/price        → Obtiene el precio actual
/startprice   → Inicia stream en tiempo real
/endprice     → Detiene el stream
```

📡 El envío de precios en tiempo real utiliza:

- Binance WebSocket
- RxJS
- Control de throttling para evitar spam

---

## 🧩 Casos de Uso Principales

### 📌 Market Data (Binance REST)

- Consultar precio
- Consultar trades
- Consultar order book

### 📌 Market Stream (Binance WS)

- Conectarse a un símbolo
- Escuchar precios
- Desconectarse bajo demanda

### 📌 Telegram Streaming

- Escuchar precios
- Enviar mensajes periódicos
- Manejo de suscripciones y límites

### 📌 DeepSeek Analysis

- Análisis del mercado
- Fusión de datos Binance + IA

---

## ⚙️ Tecnologías Usadas

- **NestJS**
- **TypeScript**
- **RxJS**
- **WebSocket (Binance)**
- **Telegraf (Telegram Bot)**
- **Arquitectura Hexagonal**

---

## ▶️ Ejecución del Proyecto (Local)

Este proyecto está pensado para ejecutarse **en entorno local**.

### 📦 Instalación de dependencias

```bash
npm install
```

### ▶️ Ejecutar en modo desarrollo

```bash
npm run start:dev
```

NestJS levantará la aplicación en modo watch.

⚠️ Asegúrate de tener configuradas tus variables de entorno (por ejemplo tokens de Binance y Telegram).

---

## 🚀 Objetivos del Proyecto

- Arquitectura limpia y desacoplada
- Streams controlados bajo demanda
- Evitar spam y límites (429 Telegram)

---

## 👨‍💻 Autor

**Javier Gualpa**

Proyecto de práctica avanzada con enfoque en **backend, arquitectura y sistemas en tiempo real**.
