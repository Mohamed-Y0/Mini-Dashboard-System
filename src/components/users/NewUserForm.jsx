import { useForm } from "react-hook-form";
import { useContext } from "react";
import { DataContext } from "../../context/Data";

function NewUserForm({ onClose }) {
  const { addUser } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    addUser(data);
    reset();
    onClose();
  }

  return (
    <form className="px-5 lg:px-40 lg:py-10" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center font-semibold tracking-wide">Add New User</h2>

      <div className="flex flex-col gap-5 py-10">
        <div className="flex flex-col justify-between gap-2.5 lg:flex-row lg:items-center lg:gap-0">
          <label htmlFor="role">Role</label>
          <input
            placeholder="Role"
            id="role"
            {...register("role", { required: "Role is required" })}
            className="rounded border px-3 py-2"
          />
        </div>
        {errors.role && (
          <p className="text-end text-sm text-red-500">{errors.role.message}</p>
        )}

        <div className="flex flex-col justify-between gap-2.5 lg:flex-row lg:items-center lg:gap-0">
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            placeholder="First Name"
            {...register("firstName", { required: "First name is required" })}
            className="rounded border px-3 py-2"
          />
        </div>
        {errors.firstName && (
          <p className="text-end text-sm text-red-500">
            {errors.firstName.message}
          </p>
        )}

        <div className="flex flex-col justify-between gap-2.5 lg:flex-row lg:items-center lg:gap-0">
          <label htmlFor="email">Email</label>
          <input
            id="emdil"
            placeholder="Email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="rounded border px-3 py-2"
          />
        </div>
        {errors.email && (
          <p className="text-end text-sm text-red-500">
            {errors.email.message}
          </p>
        )}

        <div className="flex flex-col justify-between gap-2.5 lg:flex-row lg:items-center lg:gap-0">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
            className="rounded border px-3 py-2"
          />
        </div>
        {errors.username && (
          <p className="text-end text-sm text-red-500">
            {errors.username.message}
          </p>
        )}
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onClose}
          className="rounded bg-gray-400 px-4 py-2 text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded bg-green-600 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default NewUserForm;
