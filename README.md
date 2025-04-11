# 🇳🇵 Nepal Data API

Get structured data of Nepal’s provinces, districts, local levels, and wards. This project is built using **Next.js** for educational purposes, allowing you to explore public administrative data through a RESTful API.

---

## 🧭 Overview

This is an educational API project created to practice building RESTful APIs using **Next.js**. It enables users to fetch Nepal’s administrative data in a user-friendly format, including provinces, districts, local levels, and wards.

---

## 📊 Data Source

All data is sourced from:

🔗 [https://nationaldata.gov.np](https://nationaldata.gov.np)

---

## 📦 API Endpoints

| Endpoint                                | Description                                         |
|-----------------------------------------|-----------------------------------------------------|
| `/api/province`                         | Get all provinces of Nepal                          |
| `/api/province/1`                       | Get details of province with ID 1                   |
| `/api/district`                         | Get all districts                                   |
| `/api/district/106`                     | Get details of district with ID 106                 |
| `/api/district/106/locallevel`          | Get local levels under district with ID 106         |


---

## 🛠️ Installation Guide

### ✅ Prerequisites

- Node.js v16 or higher
- npm or yarn

### 📦 Setup

```bash
# 1. Clone the repo
git clone https://github.com/mansubarna/nepaldataapi
cd nepali-data-api

# 2. Install dependencies
npm install
# or
yarn install

# 3. Run the development server
npm run dev
# or
yarn dev

# 4. Open in your browser
http://localhost:3000
