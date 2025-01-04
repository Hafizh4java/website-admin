'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";

interface Modalprops {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode
}

const Modal = ({title, description, isOpen, onClose, children} : Modalprops) => {

    const onchange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onchange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div>{children}</div>
            </DialogContent>
        </Dialog>
    )
}

export default Modal