/*import { render, screen } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

// eslint-disable-next-line no-undef
test('renders route', async () => {
	const history = createMemoryHistory();
	render(
		<Router location={history.location} navigator={history}>
			<App />|
		</Router>
	);

	// eslint-disable-next-line no-undef
	expect(screen.getByText(/BIENVENID@ INGRESA AQUI/i)).toBeInTheDocument();
});


/* import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */