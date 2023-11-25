/* eslint-disable react/prop-types */
const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {/* since this is a reusable form field, one way to distinguish it 
            to use it in the prompt label, is to add the isSurpiseME boolean
            if that exists in the given value, the Surprise Me! button will show
        */}
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-md text-black hover:bg-[#6469FF] hover:text-white"
          >
            Surprise Me!
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469FF] focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
