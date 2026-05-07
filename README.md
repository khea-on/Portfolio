# C# / .NET ERP Developer Portfolio

React portfolio for a backend developer focused on ERP systems, ASP.NET Web API, SQL Server, Entity Framework, DevExpress MVC, React.js frontend UI, and business system integration.

## Run locally

```bash
npm install
npm run dev
```

The dev server is configured to use `http://127.0.0.1:5174/` because some Windows setups block Vite's default `localhost` / `::1:5173` address.

## Build

```bash
npm run build
```

## Deploy to Vercel

Use these settings when importing the project in Vercel:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

The same settings are already saved in `vercel.json`.

Before publishing, update the GitHub profile link in `src/App.jsx`.
