import React, { useState, useCallback } from "react";
import { default as PhotoGallery } from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import fells from "Images/fells_point.jpg";
import halloween from "Images/halloween.jpg";
import dog from "Images/dog.jpg";
import birthday from "Images/2nd_birthday.jpg";
import luke from "Images/luke_bryant.jpg";
import klock from "Images/klock_wedding.jpg";
import taphouse from "Images/maxs_taphouse.jpg";
import bayforest from "Images/ocean_view.jpg";
import orioles from "Images/orioles.jpg";
import ravens from "Images/ravens_pats.jpg";
import yes from "Images/yes.jpg";
import car from "Images/car_flannel.jpg";
import whites from "Images/whites_tree_farm.jpg";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: yes,
      width: 3,
      height: 4
    },
    {
      src: fells,
      width: 3,
      height: 4
    },
    {
      src: halloween,
      width: 3,
      height: 4
    },
    {
      src: dog,
      width: 3,
      height: 2
    },
    {
      src: birthday,
      width: 3,
      height: 4
    },
    {
      src: luke,
      width: 3,
      height: 4
    },
    {
      src: ravens,
      width: 3,
      height: 4
    },
    {
      src: klock,
      width: 3,
      height: 4
    },
    {
      src: taphouse,
      width: 3,
      height: 4
    },
    {
      src: bayforest,
      width: 9,
      height: 16
    },
    {
      src: orioles,
      width: 3,
      height: 4
    },
    {
      src: whites,
      width: 3,
      height: 4
    },
    {
      src: car,
      width: 3,
      height: 4
    }
  ];

  return (
    <React.Fragment>
      <section className="gallery gallery-1">
        <PhotoGallery
          photos={photos}
          columns={5}
          direction={"row"}
          targetRowHeight={500}
          onClick={openLightbox}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal
              onClose={closeLightbox}
              styles={{
                blanket: (base, state) => ({ ...base, zIndex: 1100 }),
                positioner: (base, state) => ({ ...base, zIndex: 1110 }),
                dialog: (base, state) => ({ ...base, zIndex: 1120 })
              }}
            >
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </section>
    </React.Fragment>
  );
};

export default Gallery;
