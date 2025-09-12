import { useContext, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

import { DataContext } from "../../context/Data";

import Spinner from "../ui/Spinner";
import Table from "./Table";
import Search from "../ui/Search";
import Error from "../ui/Error";

function DisplayUesrs() {
  const { data, isLoading, error } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;

  const filteredUsers = data.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="relative px-5 lg:container lg:m-auto lg:w-fit xl:px-0">
      <h1 className="pt-5 text-center text-2xl font-semibold tracking-wide">
        Dashbaord System
      </h1>
      <div className="py-10">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="w-fit">
        <Table data={filteredUsers}>
          <tr>
            <th className="w-15">ID</th>
            <th className="w-40">Role</th>
            <th className="w-50">Name</th>
            <th className="w-100">Email</th>
            <th className="w-40">Username</th>
            <th className="w-fit">
              <IoSettingsOutline size={30} />
            </th>
          </tr>
        </Table>
      </div>
    </div>
  );
}

export default DisplayUesrs;
