import React, {ReactElement} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {Cross2Icon} from '@radix-ui/react-icons';
import {ImageContainer} from "./CaravanItem.styles";
import Image from "next/image";
import {DialogContent, DialogOverlay, DialogTitle, IconButton, CarouselImageWrapper} from "./CarouselModal.styles";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface IProps {
    pictures: string[]
}

export const CarouselModal = ({pictures}: IProps) => {

    const carouselItems = () => {
        return [
            ...pictures.map((pic, index) => (
                <CarouselImageWrapper key={index}>
                    <Image src={pic}
                           alt="caravan_image"
                           layout='fill'
                           objectFit="cover"
                           draggable='false'
                    />
                </CarouselImageWrapper>
            ))]
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <ImageContainer>
                    <Image src={pictures[0]}
                           alt="caravan_image"
                           layout='fill'
                           objectFit="cover"
                    />
                </ImageContainer>
            </Dialog.Trigger>
            <Dialog.Portal>
                <DialogOverlay/>
                <DialogContent>
                    <DialogTitle>Pictures</DialogTitle>

                    <AliceCarousel mouseTracking items={carouselItems()} infinite={true} autoWidth={true}/>

                    <Dialog.Close asChild>
                        <IconButton aria-label="Close">
                            <Cross2Icon/>
                        </IconButton>
                    </Dialog.Close>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

