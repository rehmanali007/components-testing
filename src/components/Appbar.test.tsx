import React from 'react'
import { render, screen } from '@testing-library/react'
import Appbar from './Appbar'

test('Appbar test', () => {
    const funcs = render(<Appbar />)
    console.log(funcs)
    const headingElement = screen.getByText(/Rehman Ali/i)
    expect(headingElement).toBeInTheDocument()
})