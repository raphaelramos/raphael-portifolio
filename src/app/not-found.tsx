import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '2rem' }}>Página não encontrada</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        A página que você está procurando não existe.
      </p>
      <Link 
        href="/"
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          borderRadius: '5px',
          textDecoration: 'none'
        }}
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
