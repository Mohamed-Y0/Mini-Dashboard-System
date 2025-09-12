import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../../context/Data";

function EditForm({ user, onClose }) {
  const { updateUser, removeUser } = useContext(DataContext);
  const [edit, setEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: user });

  const onSubmit = async (data) => {
    updateUser(data);
    onClose();
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center gap-5 py-5 font-semibold tracking-wide text-white">
        <button
          type="button"
          className="rounded-lg bg-green-600 px-5 py-2.5"
          onClick={() => setEdit((prev) => !prev)}
        >
          {edit ? "Lock" : "Enable Edit"}
        </button>

        <button
          type="button"
          onClick={() => {
            removeUser(user.id);
            onClose();
          }}
          className="rounded-lg bg-red-600 px-5 py-2.5"
        >
          Remove
        </button>
      </div>

      <div className="flex items-center justify-evenly">
        <label>Role</label>
        <input
          {...register("role", { required: "Role is required" })}
          disabled={!edit}
          className={`${!edit ? "bg-neutral-100 text-gray-400" : "bg-white"} rounded-sm border border-neutral-600 px-2.5 py-1`}
        />
        {errors.role && <p className="text-red-500">{errors.role.message}</p>}
      </div>

      <div className="flex items-center justify-evenly">
        <label>Name</label>
        <input
          {...register("firstName", { required: "Name is required" })}
          disabled={!edit}
          className={`${!edit ? "bg-neutral-100 text-gray-400" : "bg-white"} rounded-sm border border-neutral-600 px-2.5 py-1`}
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
      </div>

      <div className="flex items-center justify-evenly">
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          disabled={!edit}
          className={`${!edit ? "bg-neutral-100 text-gray-400" : "bg-white"} rounded-sm border border-neutral-600 px-2.5 py-1`}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="flex items-center justify-evenly">
        <label>Username</label>
        <input
          {...register("username", { required: "Username is required" })}
          disabled={!edit}
          className={`${!edit ? "bg-neutral-100 text-gray-400" : "bg-white"} rounded-sm border border-neutral-600 px-2.5 py-1`}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
      </div>

      {edit && (
        <div className="text-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-green-600 px-5 py-2.5 text-white"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      )}
    </form>
  );
}

export default EditForm;
