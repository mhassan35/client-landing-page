"use client";
import React from "react";
// import Card from "../Card";

const ProductCarousel = ({ ProductData }) => {
    let initialX;
    let isDragging = false;
    let tabBox;

    const isBrowser = () => typeof window !== "undefined";

    if (isBrowser()) {
        tabBox = document.querySelector(".scrollGrab");
    }

    // Desktop functions
    function mouseMoves(e) {
        if (!isDragging) return;
        if (tabBox) {
            tabBox.scrollLeft -= e.movementX;
        }
    }
    function mouseDown() {
        isDragging = true;
    }
    function mouseUp() {
        isDragging = false;
    }

    // mobile functions
    function mouseMovesForMobile(e) {
        if (!isDragging) return;
        if (tabBox) {
            var currentX = e.touches[0].clientX;
            var movementX = currentX - initialX;
            tabBox.scrollLeft -= movementX / 5;
        }
    }
    function mouseDownForMobile(e) {
        isDragging = true;
        initialX = e.touches[0].clientX;
    }
    return (
        <div className="space-y-4 overflow-hidden">
            <div className="text-center space-y-3">
                <p className="text-blue-800 text-sm">PROMOTIONS</p>
                <h3 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h3>
            </div>
            <div
                onMouseMove={mouseMoves}
                onMouseDown={mouseDown}
                onMouseUp={mouseUp}
                className="select-none flex gap-4 overflow-x-hidden scrollGrab py-4 overflow-y-hidden"
                onTouchMove={mouseMovesForMobile}
                onTouchStart={mouseDownForMobile}
                onTouchEnd={mouseUp}
            >

                {/* {dataToIterate.map((item, index) => (
                    <Card key={index + 4} singleProductData={item} />
                ))} */}
            </div>
        </div>
    );
};

export default ProductCarousel;
