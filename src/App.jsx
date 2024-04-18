import { useState, useEffect } from "react";
import Form from "./Form";
import Header from "./Header";
import ItemsList from "./ItemsList";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
const App = () => {
  const initialItems = JSON.parse(localStorage.getItem("items")) || [];
  console.log(initialItems);

  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleAddItem(e) {
    setInputValue("");
    e.preventDefault();
    if (inputValue !== "") {
      setItems(() => {
        return [...items, { itemName: inputValue, id: nanoid() }];
      });
      localStorage.setItem("items", JSON.stringify(items));
      toast.success("Item Added Successfully");
    } else {
      toast.error("Please Provide Value");
    }
  }

  function handleDeleteItem(id) {
    localStorage.setItem("items", JSON.stringify(items));
    const newItems = items.filter((item) => id !== item.id);
    setItems(newItems);
    toast.error("Item Deleted Successfully");
  }

  return (
    <main className="section-center">
      <Header />
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddItem={handleAddItem}
      />
      <ItemsList items={items} handleDeleteItem={handleDeleteItem} />
    </main>
  );
};

export default App;
