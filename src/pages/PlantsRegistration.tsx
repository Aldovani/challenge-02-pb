import { useState, FormEvent } from "react";
import plantImage from "../assets/image23.png";

interface FormErrors {
  plantName?: string;
  plantSubtitle?: string;
  plantType?: string;
  price?: string;
  discount?: string;
  label?: string;
  features?: string;
  description?: string;
}
export function PlantsRegistration() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newErrors: FormErrors = {};

    if (!formData.get("plantName")) {
      newErrors.plantName = "Please enter plant name";
    }
    if (!formData.get("plantSubtitle")) {
      newErrors.plantSubtitle = "Please enter plant subtitle";
    }
    if (!formData.get("plantType")) {
      newErrors.plantType = "Please enter plant type";
    }
    if (!formData.get("price")) {
      newErrors.price = "Please enter price";
    } else if (isNaN(parseFloat(formData.get("price") as string))) {
      newErrors.price = "Please enter a valid price";
    }
    if (!formData.get("discount")) {
      newErrors.discount = "Please enter discount percentage";
    } else if (isNaN(parseFloat(formData.get("discount") as string))) {
      newErrors.discount = "Please enter a valid discount percentage";
    }
    if (!formData.get("label")) {
      newErrors.label = "Please select label";
    }
    if (!formData.get("features")) {
      newErrors.features = "Please enter features";
    }
    if (!formData.get("description")) {
      newErrors.description = "Please enter description";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("Seu formulário foi registrado com sucesso");
      form.reset();
    } else {
      setSuccessMessage("");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg flex flex-col sm:flex-row max-w-4xl w-full">
        <div className="w-full sm:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-6 text-green-600">
            Plant registration
          </h2>
          <hr className="mb-6" />
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Plant name</label>
              <input
                type="text"
                name="plantName"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Echinocereus Cactus"
              />
              {errors.plantName && (
                <span className="text-red-500">{errors.plantName}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Plant subtitle</label>
              <input
                type="text"
                name="plantSubtitle"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="A majestic addition to your plant collection"
              />
              {errors.plantSubtitle && (
                <span className="text-red-500">{errors.plantSubtitle}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Plant type</label>
              <input
                type="text"
                name="plantType"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Cactus"
              />
              {errors.plantType && (
                <span className="text-red-500">{errors.plantType}</span>
              )}
            </div>
            <div className="mb-4 flex">
              <div className="mr-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="text"
                  name="price"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="$139.99"
                />
                {errors.price && (
                  <span className="text-red-500">{errors.price}</span>
                )}
              </div>
              <div>
                <label className="block text-gray-700">
                  Discount percentage
                </label>
                <input
                  type="text"
                  name="discount"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="20%"
                />
                {errors.discount && (
                  <span className="text-red-500">{errors.discount}</span>
                )}
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
                  value="indoor"
                />
                <label htmlFor="indoor" className="mr-4">
                  Indoor
                </label>
                <input
                  type="radio"
                  name="label"
                  className="mr-2"
                  id="outdoor"
                  value="outdoor"
                />
                <label htmlFor="outdoor">Outdoor</label>
              </div>
              {errors.label && (
                <span className="text-red-500">{errors.label}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Features</label>
              <textarea
                name="features"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Species: Echinocereus..."
              ></textarea>
              {errors.features && (
                <span className="text-red-500">{errors.features}</span>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Ladyfinger cactus..."
              ></textarea>
              {errors.description && (
                <span className="text-red-500">{errors.description}</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Register
            </button>
            {successMessage && (
              <div className="mt-4 text-green-600">{successMessage}</div>
            )}
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
}
