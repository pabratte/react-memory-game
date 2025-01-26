import { FaGithub } from 'react-icons/fa';

export default function Footer(props) {  
    return (
      <footer>
        <p>
            Made in 2024 by Pablo Abratte
        </p>
        <a href="https://github.com/pabratte/react-memory-game" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
      </footer>
    );
}
