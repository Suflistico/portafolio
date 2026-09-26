import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('permite abrir y cerrar la navegación móvil al elegir una sección', () => {
  render(<App />);
  const menu = screen.getByRole('button', { name: 'Menú' });
  fireEvent.click(menu);
  expect(menu).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Sobre mí' }));
  expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('ofrece el CV y solo publica enlaces válidos de proyectos', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /Descargar CV/ })).toHaveAttribute('href', '/CVPAPP.pdf');
  expect(screen.getAllByRole('link', { name: /Ver proyecto/ }).map(link => link.getAttribute('href'))).toEqual([
    'https://pizzeria-paolo.netlify.app',
    'https://controlfinancieroweb.netlify.app/',
  ]);
  expect(document.querySelector('a[href=""]')).toBeNull();
  expect(document.querySelector('iframe')).toBeNull();
});
