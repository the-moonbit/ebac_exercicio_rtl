import { fireEvent, render, screen } from '@testing-library/react';
import Post from './index'; // ou o caminho correto para o seu index.tsx do Post

describe('Teste para o componente Post (Comentários)', () => {
    it('Deve permitir a inserção de dois comentários', () => {
        render(<Post />);

        const inputComentario = screen.getByTestId('campo-comentario');
        const botaoAdicionar = screen.getByTestId('botao-adicionar');

        fireEvent.change(inputComentario, {
            target: { value: 'Primeiro comentário de teste' }
        });
        fireEvent.click(botaoAdicionar);

        fireEvent.change(inputComentario, {
            target: { value: 'Segundo comentário de teste' }
        });
        fireEvent.click(botaoAdicionar);

        expect(screen.getByText('Primeiro comentário de teste')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário de teste')).toBeInTheDocument();
    });
});