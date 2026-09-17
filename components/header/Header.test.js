import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from './Header';


// Mock the next/head component
jest.mock('next/head', () => {
    // eslint-disable-next-line react/display-name
    return ({ children }) => <>{children}</>;
});

// Mock the next/image component
// eslint-disable-next-line react/display-name
jest.mock('next/image', () => (props) => <img {...props} />);

describe('Header Component', () => {
    test('renders the correct title in Head', () => {
        render(<Header />);

        // Check if the title is set correctly in the document
        const headTitle = document.title;
        expect(headTitle).toBe("Zapp's Equipment Inventory");
    });

    test('renders the image with correct attributes', () => {
        render(<Header />);

        // Check if the image is in the document
        const image = screen.getByAltText('my equip');
        console.log("kkk " + image)
         expect(image).toBeInTheDocument();

        // Verify the image attributes
        expect(image).toHaveAttribute('alt', 'my equip');
    });
});
