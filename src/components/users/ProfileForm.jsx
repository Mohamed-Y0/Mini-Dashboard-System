import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../../context/Data";
import Input from "../ui/Input";

function ProfileForm({ user, onClose }) {
  const { updateUser, removeUser } = useContext(DataContext);
  const [edit, setEdit] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: user });

  useEffect(() => {
    reset(user);
  }, [user, reset]);

  async function onSubmit(data) {
    await updateUser(data);
    onClose();
  }

  return (
    <form
      className="container m-auto px-5 py-8 capitalize md:px-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-10 rounded-2xl border border-neutral-400 bg-neutral-100 p-5 shadow-2xl">
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

        <div className="flex flex-col gap-10 border-b border-neutral-300 pb-5">
          <div className="flex flex-col gap-10 lg:flex-row">
            <Input
              id="firstName"
              label="First Name"
              disabled={!edit}
              rules={{ required: "First name is required" }}
              register={register}
              error={errors.firstName}
            />

            <Input id="lastName" label="Last Name" disabled />
          </div>

          <div className="flex flex-col gap-10 lg:flex-row">
            <Input
              id="email"
              label="Email"
              type="email"
              register={register}
              rules={{ required: "Email is required" }}
              disabled={!edit}
              error={errors.email}
            />

            <Input id="phone" label="Phone Number" disabled />
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          <Input
            id="role"
            label="Role"
            register={register}
            rules={{ required: "Role is required" }}
            disabled={!edit}
            error={errors.role}
          />
          <Input id="birthDate" label="Birth Date" disabled />
          <Input id="gender" label="Gender" disabled />
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          <Input
            id="username"
            label="Username"
            register={register}
            rules={{ required: "Username is required" }}
            disabled={!edit}
            error={errors.username}
          />
          <Input id="country" label="Country" disabled />
          <Input id="city" label="City" disabled />
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
      </div>
    </form>
  );
}

export default ProfileForm;
