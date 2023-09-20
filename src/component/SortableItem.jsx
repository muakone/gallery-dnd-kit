import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  console.log(props);
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {/* Customize the content based on your object structure */}
      <div className="bg-white rounded-md sm:w-72 w-[290px] min-h-[400px] mt-3 mx-auto shadow-md sm:cursor-grab cursor-not-allowed">
      <div
        className="w-full h-[320px] rounded-t-md"
        style={{
          backgroundImage: `url(${props.id.largeImageURL})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex mt-2 ml-2">
        <span className="font-medium text-base mr-2">Tags:</span>
        <div className="flex flex-wrap items-center gap-x-3">
          {props.id.tags.split(", ").map((tag, index) => (
            <p
              key={index}
              className=" bg-gray-700 text-white rounded-full px-2 py-1 text-sm mr-2 mb-2"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
        </div>
    </div>
  );
}
