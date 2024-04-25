const AddUserPage = () => {
  return (
    <div className="bg-bgSoft mt-4">
      <form action="" className="p-4">
        <div className="flex justify-between mb-8">
          <div className="flex flex-col w-[45%]">
            <input
              className="bg-bg mb-4 p-8 rounded-md"
              type="text"
              placeholder="username"
              name="username"
              required
            />
            <input
              className="bg-bg mb-4 p-8 rounded-md"
              type="password"
              placeholder="password"
              name="price"
              required
            />
            <select name="isAdmin" id="isAdmin" className="bg-bg mb-4 p-8 rounded-md">
              <option value={'false'}>Is Admin?</option>
              <option value={'true'}>Yes</option>
              <option value={'false'}>No</option>
            </select>
          </div>
          <div className="flex flex-col w-[45%]">
            <input
              className="bg-bg mb-4 p-8 rounded-md"
              type="email"
              placeholder="email"
              name="stock"
              required
            />
            <input
              className="bg-bg mb-4 p-8 rounded-md"
              type="phone"
              placeholder="phone"
              name="size"
            />
           <select name="isActive" id="isActive" className="bg-bg mb-4 p-8 rounded-md">
          <option value={'true'}>
            Is Active?
          </option>
          <option value={'true'}>Yes</option>
          <option value={'false'}>No</option>
        </select>
          </div>
        </div>
        <div className="">
          <textarea
            required
            name="adress"
            id="adress"
            rows={16}
            placeholder="adress"
            className="w-full bg-bg mb-4 p-4 outline-none rounded-md"
          ></textarea>
        </div>
        <button className="bg-greenBlueBtnDark w-full p-8" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
