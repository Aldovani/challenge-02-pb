import plantImage from "../assets/image23.png";

const PlantRegistration = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg flex flex-col sm:flex-row max-w-4xl w-full">
        <div className="w-full sm:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-6 text-green-600">
            Plant registration
          </h2>
          <hr className="mb-6" />
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Plant name</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Echinocereus Cactus"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Plant subtitle</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="A majestic addition to your plant collection"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Plant type</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Cactus"
              />
            </div>
            <div className="mb-4 flex">
              <div className="mr-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="$139.99"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Discount percentage
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="20%"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Label</label>
              <div className="mt-1 flex items-center">
                <input
                  type="radio"
                  name="label"
                  className="mr-2"
                  id="indoor"
                  defaultChecked
                />
                <label htmlFor="indoor" className="mr-4">
                  Indoor
                </label>
                <input
                  type="radio"
                  name="label"
                  className="mr-2"
                  id="outdoor"
                />
                <label htmlFor="outdoor">Outdoor</label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Features</label>
              <textarea
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Species: Echinocereus..."
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Description</label>
              <textarea
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Ladyfinger cactus..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Register
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 p-4 flex justify-center">
          <img
            src={plantImage}
            alt="Plant"
            className="w-full lg:max-w-md h-auto rounded-md filter grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default PlantRegistration;
