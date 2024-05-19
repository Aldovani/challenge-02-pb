import { useState, FormEvent } from "react";
import { Plants } from "../types/Plants";
import plantImage from "../assets/image23.png";
import { FormErrors } from "../types/Form";
import { FormField } from "../types/Form";
import { httpRequest } from "../utils/httpRequest";

const Form = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [nextId, setNextId] = useState<number>(6);

  const imageUrls = [
    "/plant1.png",
    "/plant2.png",
    "/plant3.png",
    "/plant4.png",
  ];
  const [imageIndex, setImageIndex] = useState(0);

  const formatPrice = (value: string): string => {
    if (!value.startsWith("$")) {
      value = "$" + value;
    }
    return value;
  };

  const formatPercentage = (value: string): string => {
    const numericValue = value.replace(/\D/g, "");
    let intValue = parseInt(numericValue, 10);
    if (isNaN(intValue)) {
      intValue = 0;
    } else if (intValue > 100) {
      intValue = 100;
    }
    return intValue + "%";
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.includes(",")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: "Use ' . ' instead of ' , '.",
      }));
    } else {
      value = value.replace(/[^\d.]/g, "");
      const formattedValue = formatPrice(value);
      e.target.value = formattedValue;

      setErrors((prevErrors) => {
        const { price, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = formatPercentage(value.replace("%", ""));
    e.target.value = formattedValue;
  };

  const handlePriceBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.includes(",")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: "Use ' . ' instead of ' , '.",
      }));
    } else {
      let [dollars, cents] = value.replace("$", "").split(".");
      if (!cents) {
        cents = "00";
      } else if (cents.length === 1) {
        cents = cents + "0";
      }
      e.target.value = `$${dollars}.${cents}`;
      setErrors((prevErrors) => {
        const { price, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const newErrors: FormErrors = {};

    if (!value) {
      newErrors[name as FormField] =
        `Please enter ${name.replace(/([A-Z])/g, " $1").toLowerCase()}`;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...newErrors,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    } else if (formData.get("price") === "$0.00") {
      newErrors.price = "Please enter a valid price";
    }

    const discount = formData.get("discount");
    if (
      (discount && !/^(\d{1,3})%?$/.test(discount as string)) ||
      discount === "0%"
    ) {
      newErrors.discount = "Please enter a valid discount percentage";
    } else if (discount && parseFloat(discount as string) > 100) {
      newErrors.discount = "Discount percentage cannot exceed 100%";
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
      const label = formData.get("label") as string;
      const plantType = formData.get("plantType") as string;

      const newPlant: Plants = {
        id: nextId,
        name: formData.get("plantName") as string,
        subtitle: formData.get("plantSubtitle") as string,
        label: [label, plantType],
        price: formData.get("price") as string,
        isInSale: !!formData.get("discount"),
        discountPercentage: parseInt(
          (formData.get("discount") as string).replace("%", ""),
        ),
        features: formData.get("features") as string,
        description: formData.get("description") as string,
        imgUrl: imageUrls[imageIndex],
      };

      try {
        const response = await httpRequest.post<Plants>("/", newPlant);

        if (response.status === 201) {
          setSuccessMessage("Seu formulário foi registrado com sucesso");
          form.reset();
          setSelectedLabel("");
          setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
          setNextId((prevId) => prevId + 1);
        } else {
          setSuccessMessage("");
          console.error("Erro ao enviar dados:", response.data);
        }
      } catch (error) {
        console.error("Erro ao enviar requisição:", error);
      }
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className=" flex items-center  sm:items-start justify-center sm:justify-start font-inter bg-wisper lg:pl-20 relative">
      <div className="container  2xl:mx-auto  justify-center lg:justify-normal sm:p-8 flex flex-col sm:flex-row max-w-4xl w-full">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl mb-6 text-primary-lunar-green font-semibold">
            Plant registration
          </h2>
          <hr className="mb-6 p-2 border-dark-gray" />
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="plantName"
                className="block text-dark-IBBNB font-medium"
              >
                Plant name
              </label>
              <input
                type="text"
                name="plantName"
                id="plantName"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                placeholder="Echinocereus Cactus"
                onBlur={handleBlur}
              />
              {errors.plantName && (
                <span className="text-red-500">{errors.plantName}</span>
              )}
            </div>

            <div className="mb-4 ">
              <label
                htmlFor="plantSubtitle"
                className="block text-dark-IBBNB font-medium"
              >
                Plant subtitle
              </label>
              <input
                type="text"
                name="plantSubtitle"
                id="plantSubtitle"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                placeholder="A majestic addition to your plant collection"
                onBlur={handleBlur}
              />
              {errors.plantSubtitle && (
                <span className="text-red-500">{errors.plantSubtitle}</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="plantType"
                className="block text-dark-IBBNB font-medium"
              >
                Plant type
              </label>
              <input
                type="text"
                name="plantType"
                id="plantType"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                placeholder="Cactus"
                onBlur={handleBlur}
              />
              {errors.plantType && (
                <span className="text-red-500">{errors.plantType}</span>
              )}
            </div>
            <div className="mb-4 gap-2 sm:flex ">
              <div className="   flex-1">
                <label
                  htmlFor="price"
                  className="block text-dark-IBBNB font-medium"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                  placeholder="$139.99"
                  onChange={handlePriceChange}
                  onBlur={handlePriceBlur}
                />
                {errors.price && (
                  <span className="text-red-500">{errors.price}</span>
                )}
              </div>
              <div className=" max-sm:mt-3 flex-1">
                <label
                  htmlFor="discount"
                  className="block text-dark-IBBNB font-medium"
                >
                  Discount percentage
                </label>
                <input
                  type="text"
                  name="discount"
                  id="discount"
                  className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                  placeholder="20%"
                  onChange={handleDiscountChange}
                  onBlur={handleBlur}
                />
                {errors.discount && (
                  <span className="text-red-500">{errors.discount}</span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-dark-IBBNB font-medium">
                Label:
              </label>
              <div className="mt-1 flex items-start">
                <div className="flex items-center">
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
                    className={`mr-4  font-medium ${
                      selectedLabel === "indoor"
                        ? "text-dark-IBBNB"
                        : "text-dark-gray"
                    }`}
                  >
                    Indoor
                  </label>
                </div>
                <div className="flex items-center">
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
                    className={`font-medium ${
                      selectedLabel === "outdoor"
                        ? "text-dark-IBBNB"
                        : "text-dark-gray"
                    }`}
                  >
                    Outdoor
                  </label>
                </div>
              </div>
              {errors.label && (
                <span className="text-red-500">{errors.label}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="features"
                className="block text-dark-IBBNB font-medium"
              >
                Features
              </label>
              <textarea
                name="features"
                id="features"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md resize-none"
                placeholder="Species: Echinocereus..."
                onBlur={handleBlur}
              ></textarea>
              {errors.features && (
                <span className="text-red-500">{errors.features}</span>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-dark-IBBNB font-medium"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md resize-none"
                placeholder="Ladyfinger cactus..."
                onBlur={handleBlur}
              ></textarea>
              {errors.description && (
                <span className="text-red-500">{errors.description}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary-lunar-green text-white font-bold py-2 hover:bg-primary-avacado transition"
            >
              Register
            </button>
            {successMessage && (
              <div className="mt-4 text-green-600">{successMessage}</div>
            )}
          </form>
        </div>
        <div className="hidden lg:block h-full">
          <img
            src={plantImage}
            alt="Plant"
            className=" filter-custom-drop-shadow mix-blend-luminosity h-full absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
