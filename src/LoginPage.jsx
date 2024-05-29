import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const navigate=useNavigate();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { errors } = formState;
  console.log(errors);

  const onSubmit = (formData) => {
    console.log(formData);
  navigate("/app/profile")
  };
  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7f2ba985438959.5d7b9a4b53130.jpg)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="email"
                required
                id="email"
                name="email"
                autoComplete="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  validate: {
                    isValidEmail: (value) =>
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email is not valid",
                  },
                })}
              />
            </div>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
            />
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
              </div>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  validate: {
                    minLength: (value) =>
                      value.length >= 8 ||
                      "Password should have more than 8 characters",
                    isCapitalLetter: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password should have atleast 1 capital letter",
                    isLowerCaseLetter: (value) =>
                      /[a-z]/.test(value) ||
                      "Password should have atleast 1 lower case letter",
                    isContainNumber: (value) =>
                      /\d/.test(value) ||
                      "Password should have atleast 1 number",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <p className="text-red-500">{message}</p>
                )}
              />

              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
              >
                Forget Password?
              </a>
            </div>
            <div className="mt-8">
              <button
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="#"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have any account yet?
              <span className="text-blue-700"> Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
