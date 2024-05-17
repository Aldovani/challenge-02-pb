import { useState, FormEvent } from "react";
import plantImage from "../assets/image23.png";

type FormField =
  | "plantName"
  | "plantSubtitle"
  | "plantType"
  | "price"
  | "discount"
  | "label"
  | "features"
  | "description";

type FormErrors = {
  [key in FormField]?: string;
};

const PlantsRegistration = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [selectedLabel, setSelectedLabel] = useState<string>("");

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
    } else if (
      !/^(\$)?(\d{1,4})(\.\d{1,2})?$/.test(formData.get("price") as string) ||
      formData.get("price") === "$0.00"
    ) {
      newErrors.price = "Please enter a valid price";
    }

    const discount = formData.get("discount");
    if (discount && isNaN(parseFloat(discount as string))) {
      newErrors.discount = "Please enter a valid discount percentage";
    } else if (
      (discount && !/^(\d{1,3})%?$/.test(discount as string)) ||
      discount === "0%"
    ) {
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
      setSelectedLabel("");
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-inter bg-wisper">
      <div className="p-8 flex flex-col sm:flex-row max-w-4xl w-full">
        <div className="w-full sm:w-1/2 p-4 -mr-4">
          <h2 className="text-2xl font-bold mb-6 text-primary-lunar-green">
            Plant registration
          </h2>
          <hr className="mb-6 p-2 border-dark-gray" />
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-dark-IBBNB">Plant name</label>
              <input
                type="text"
                name="plantName"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                placeholder="Echinocereus Cactus"
              />
              {errors.plantName && (
                <span className="text-red-500">{errors.plantName}</span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-dark-IBBNB">Plant subtitle</label>
              <input
                type="text"
                name="plantSubtitle"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                placeholder="A majestic addition to your plant collection"
              />
              {errors.plantSubtitle && (
                <span className="text-red-500">{errors.plantSubtitle}</span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-dark-IBBNB">Plant type</label>
              <input
                type="text"
                name="plantType"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                placeholder="Cactus"
              />
              {errors.plantType && (
                <span className="text-red-500">{errors.plantType}</span>
              )}
            </div>
            <div className="mb-4 flex">
              <div className="mr-2 flex-1">
                <label className="block text-dark-IBBNB">Price</label>
                <input
                  type="text"
                  name="price"
                  className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                  placeholder="$139.99"
                />
                {errors.price && (
                  <span className="text-red-500">{errors.price}</span>
                )}
              </div>
              <div className="ml-2 flex-1">
                <label className="block text-dark-IBBNB">
                  Discount percentage
                </label>
                <input
                  type="text"
                  name="discount"
                  className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                  placeholder="20%"
                />
                {errors.discount && (
                  <span className="text-red-500">{errors.discount}</span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-dark-IBBNB">Label</label>
              <div className="mt-1 flex items-center">
                <input
                  type="radio"
                  name="label"
                  className="mr-2"
                  id="indoor"
                  value="indoor"
                  onChange={() => setSelectedLabel("indoor")}
                />
                <label
                  htmlFor="indoor"
                  className={`mr-4 ${
                    selectedLabel === "indoor"
                      ? "text-dark-IBBNB"
                      : "text-dark-gray"
                  }`}
                >
                  Indoor
                </label>
                <input
                  type="radio"
                  name="label"
                  className="mr-2"
                  id="outdoor"
                  value="outdoor"
                  onChange={() => setSelectedLabel("outdoor")}
                />
                <label
                  htmlFor="outdoor"
                  className={`${
                    selectedLabel === "outdoor"
                      ? "text-dark-IBBNB"
                      : "text-dark-gray"
                  }`}
                >
                  Outdoor
                </label>
              </div>
              {errors.label && (
                <span className="text-red-500">{errors.label}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-dark-IBBNB">Features</label>
              <textarea
                name="features"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md resize-none"
                placeholder="Species: Echinocereus..."
              ></textarea>
              {errors.features && (
                <span className="text-red-500">{errors.features}</span>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-dark-IBBNB">Description</label>
              <textarea
                name="description"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md resize-none"
                placeholder="Ladyfinger cactus..."
              ></textarea>
              {errors.description && (
                <span className="text-red-500">{errors.description}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary-lunar-green text-white py-2 hover:bg-primary-avacado"
            >
              Register
            </button>
            {successMessage && (
              <div className="mt-4 text-green-600">{successMessage}</div>
            )}
          </form>
        </div>
        <div className="w-full lg:w-1/2 p-4 justify-center hidden lg:block relative">
          <div className="relative flex justify-end items-end h-full">
            <img
              src={plantImage}
              alt="Plant"
              className="fixed bottom-0 right-0 mix-blend-luminosity h-48 lg:h-full filter-custom-drop-shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsRegistration;
