import Navbar from '../../layout/Navbar'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';


test('renders navbar', () => {
    render(<BrowserRouter><Navbar/></BrowserRouter>)
    expect(screen.getByText('Home'))
})
