import { ReactNode } from 'react';
import './styles.css';

type ButtonProps = {
    label?: string;
    children: ReactNode;
    disabled?: boolean;
    onSubmit: (value?: string) => void;
    onValidate?: () => boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, children, disabled, onSubmit, onValidate }) => {

    const handleOnClick = () => {
        const isValid = onValidate?.();

        console.log(isValid);

        if (isValid || !onValidate) {
            onSubmit(label);
        } else {
            alert ('Formulário inválido');
        }
    };

    return <button className="button" onClick={handleOnClick} disabled={disabled}>
        {label ? label : children}
    </button>
};
