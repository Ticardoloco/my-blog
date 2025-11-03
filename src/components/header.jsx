import { useEffect, useState } from "react";
import Modal from "./modal";
import useBlog from "../store/useBlog";
const Header = () => {
  const addBlog = useBlog((state) => state.addBlog);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [titleValid, setTitleValid] = useState("");
  const [descriptionValid, setDescriptionValid] = useState("");
  const [imageURLValid, setImageURLValid] = useState("");
  const [validation, setValidation] = useState({
    titleLength: false,
    descriptionLength: false,
    imageURLLength: false,
  });

  const newValidation = { ...validation };

  newValidation.titleLength = title.trim().length > 0;
  newValidation.descriptionLength = description.trim().length > 0;
  newValidation.imageURLLength = imageURL.trim().length > 0;

  const titleL = newValidation.titleLength;
  const descriptionL = newValidation.descriptionLength;
  const imageUrlL = newValidation.imageURLLength;

  const handleSubmit = () => {
    const blog = {
      id: Math.random(),
      title,
      description,
      imageURL,
      createdAt: new Date().getUTCDate,
      updatedAt: new Date().getUTCDate,
    };

    setTitleValid(titleL ? "" : "Your title blog is empty");
    setDescriptionValid(descriptionL ? "" : "Your description blog is empty");
    setImageURLValid(imageUrlL ? "" : "Your imageUrl blog is empty");

    if ([titleL, descriptionL, imageUrlL].includes(false)) {
      return;
    }

    addBlog(blog);
    setTitle('')
    setDescription('')
    setImageURL('')
    

    setIsOpen(false);
  };
  useEffect(() => {
    setValidation();
  }, []);

  return (
    <div className="w-full py-8 bg-gray-500 relative">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl sm:text-4xl text-gray-200 font-bold px-5">
          Dashboard
        </h2>
        <button
          className="w-25  sm:w-30 h-10 rounded-3xl text-gray-200 bg-gray-800 text-base sm:text-xl cursor-pointer border border-solid border-transparent hover:border-gray-800 hover:bg-transparent hover:text-gray-800 mx-5"
          onClick={() => setIsOpen(true)}
        >
          New Blog
        </button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="">
            <h1 className="text-2xl sm:text-4xl text-gray-800 font-medium text-center">
              Create Blog
            </h1>
            <label className="text-lg text-left ">Blog title:</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              type="text"
              className="w-full h-8.75 bg-gray-300 outline-none p-3 mt-3 rounded"
            />
            <p className="text-lg text-red-700 text-left mb-3">{titleValid}</p>

            <label className="text-lg text-left">Blog description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              name="des"
              className="w-full h-20 bg-gray-300 outline-none p-3 mt-3 rounded"
            />
            <p className="text-lg text-red-700 text-left mb-3">{descriptionValid}</p>

            <label className="text-lg text-left">Blog imageURl:</label>
            <input
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              required
              type="text"
              className="w-full h-8.75 bg-gray-300 outline-none p-3 mt-3 rounded"
            />
            <p className="text-lg text-red-700 text-left mb-3">{imageURLValid}</p>

            <div className="text-center my-4">
              <button
                onClick={handleSubmit}
                className="w-30 h-10 bg-gray-800 text-lg text-gray-200 rounded-3xl cursor-pointer"
              >
                Add Blog
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
