import React from 'react'
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { useState, useEffect } from "react";
import { SortableItem } from "../component/SortableItem";
import Header from "../component/Header";
import LoadingSkeleton from "../component/LoadingSkeleton";
import { toast } from "react-toastify";
import Navbar from '../component/NavBar';

const Home = () => {
    const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);
    try{
    if(searchTerm !== "") {
      setItems(items.filter((item) =>
      item.tags.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    setIsLoading(false)
    } else {
    fetch(
      "https://pixabay.com/api/?key=39531365-0f0f6711437439bd9bc7abac1&q=art+gallery&image_type=photo&pretty=true&per_page=30"
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data.hits);
        setIsLoading(false);
      });

    }} catch(err) {
      toast.success("Items can't be fetched")
  }
      
  }, [searchTerm]);


  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;

    if (active && over) {
      if (active.id !== over.id) {
        setItems((items) => {
          const draggedItem = items.find((item) => item.id === active.id);
          const overItem = items.find((item) => item.id === over.id);

          const draggedIndex = items.indexOf(draggedItem);
          const overIndex = items.indexOf(overItem);

          const updatedItems = [...items];
          updatedItems.splice(draggedIndex, 1);
          updatedItems.splice(overIndex, 0, draggedItem);

          return updatedItems;
        });
      }
    }
  }
  return (
    <div className="w-full">
    <Navbar />
    <Header text={searchTerm} textState={setSearchTerm} />
    {!isLoading ? (
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="sm:p-3 my-4 w-[95%] mx-auto flex justify-center">
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 w-full mx-auto items-center">
              {items.map((item, index) => (
                <SortableItem key={item.id} id={item} />
              ))}
            </div>
          </SortableContext>
        </div>
      </DndContext>
    ) : (
      <div className="flex flex-wrap gap-5 my-8">
        <LoadingSkeleton />
      </div>
    )}
    
    
  </div>
  )
}

export default Home