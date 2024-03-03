// src/pages/_app.js
import React from 'react';
import App from 'next/app';
import Header from '../components/Header'; // Assurez-vous que le chemin d'importation est correct
import Footer from '../components/Footer'; // Assurez-vous que le chemin d'importation est correct
import '../styles/index.css'; // Importez vos styles globaux ici

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

export default MyApp;