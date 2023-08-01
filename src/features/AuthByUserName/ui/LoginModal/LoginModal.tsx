import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { Suspense } from 'react';
import LoginFormLazy from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            className={ClassNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    );
};
