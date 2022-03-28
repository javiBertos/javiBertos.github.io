import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import App from './components/App/App';
import Footer from './components/Footer/Footer';
import './index.css';
import reportWebVitals from './reportWebVitals';
import siteConfig from './site-config.json';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={ siteConfig.site.description } />
      <title>{ siteConfig.site.name }</title>
      <link rel="canonical" href={siteConfig.site.url} />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/css/uikit.min.css" />
    </Helmet>
    <App />
    <Footer site={ siteConfig.site } author={ siteConfig.author } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
