
const AddProductPage = () => {
  return (
    <div className="bg-bgSoft mt-4">
      <form action="" className="p-4">
        <div className="flex justify-between mb-8">
          <div className="flex flex-col w-[45%]">
            <input className="bg-bg mb-4 p-8 rounded-md" type="text" placeholder="title" name="title" required />
            <input className="bg-bg mb-4 p-8 rounded-md" type="number" placeholder="price" name="price" required />
            <input className="bg-bg mb-4 p-8 rounded-md" type="text" placeholder="color" name="color" />
          </div>
          <div className="flex flex-col w-[45%]">
            <select className="bg-bg mb-4 p-8 rounded-md" name="cat" id="cat">
              <option value="general">Choose a Category</option>
              <option value="kitchen">Kitchen</option>
              <option value="phone">Phone</option>
              <option value="computer">Computer</option>
            </select>
            <input className="bg-bg mb-4 p-8 rounded-md" type="number" placeholder="stock" name="stock" required />
            <input className="bg-bg mb-4 p-8 rounded-md" type="text" placeholder="size" name="size" />
          </div>
        </div>
        <div className="">
          <textarea
            required
            name="desc"
            id="desc"
            rows={16}
            placeholder="Description"
            className="w-full bg-bg mb-4 p-4 outline-none rounded-md"
          ></textarea>
        </div>
        <button className="bg-greenBlueBtnDark w-full p-8" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
