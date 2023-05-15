import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import {ImageContainer} from "./CaravanItem.styles";
import Image from "next/image";
import {ICaravan} from "../../types";
import {DialogContent, DialogOverlay, DialogTitle, IconButton} from "./CarouselModal.styles";

interface IProps {
    caravan: ICaravan
}

export const CarouselModal = ({caravan}: IProps) => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <ImageContainer>
                <Image src={caravan.pictures[0]}
                       alt="caravan_image"
                       layout='fill'
                       objectFit="cover"
                />
            </ImageContainer>
        </Dialog.Trigger>
        <Dialog.Portal>
            <DialogOverlay />
            <DialogContent>
                <DialogTitle>Pictures</DialogTitle>
                <Dialog.Close asChild>
                    <IconButton aria-label="Close">
                        <Cross2Icon />
                    </IconButton>
                </Dialog.Close>
            </DialogContent>
        </Dialog.Portal>
    </Dialog.Root>
);

