import { useState } from "react";
import Button from "../ui/Button";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Modal from "../common/Modal";
import { LiaUserEditSolid } from "react-icons/lia";
import NewUserForm from "./NewUserForm";
import ProfileForm from "./ProfileForm";

function Table({ data, children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  if (data.length === 0) return <p>There Is No Data..</p>;

  const postsPerPage = 10;
  const totalPages = Math.ceil(data.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setIsOpenModal(true);
  };

  return (
    <>
      <div className="flex items-center justify-between pb-5">
        <p className="bg-secondary rounded-lg px-5 py-2.5 shadow-lg ring ring-neutral-400">
          Number of users {data.length}
        </p>
        <button
          className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2.5 font-semibold tracking-wide text-white"
          onClick={() => setNewUser(true)}
        >
          + New User
        </button>
      </div>
      <table className="table-fixed overflow-hidden rounded-lg text-center shadow-lg ring ring-neutral-400">
        <thead className="border-b-2 border-neutral-100">{children}</thead>
        <tbody>
          {currentPosts.map((user) => (
            <tr className="border-neutral-200 not-last:border-b" key={user.id}>
              <td>{user.id}</td>
              <td>{user.role}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>
                <button onClick={() => handleOpenModal(user)}>
                  <LiaUserEditSolid
                    size={35}
                    className="cursor-pointer rounded-lg p-1 hover:bg-neutral-50"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-5 py-10">
        <div className="rounded-lg shadow-lg ring ring-neutral-400">
          <p className="bg-secondary rounded-lg px-5 py-2.5">
            {currentPage} of {totalPages}
          </p>
        </div>

        <div className="flex justify-end gap-10">
          <Button handleClick={handlePrev} disabled={currentPage === 1}>
            <GrLinkPrevious /> Previous
          </Button>
          <Button
            handleClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next <GrLinkNext />
          </Button>
        </div>
      </div>

      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        {selectedUser && (
          <ProfileForm
            user={selectedUser}
            onClose={() => setIsOpenModal(false)}
          />
        )}
      </Modal>

      <Modal open={newUser} onClose={() => setNewUser(false)}>
        <NewUserForm onClose={() => setNewUser(false)} />
      </Modal>
    </>
  );
}

export default Table;
