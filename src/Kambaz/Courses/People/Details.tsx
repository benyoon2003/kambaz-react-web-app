import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import { FormControl } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";

export default function PeopleDetails() {
  const { uid } = useParams();
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  };

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email || "");
    setRole(user.role || "");
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  if (!uid) return null;

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { 
      ...user, 
      firstName, 
      lastName: lastName || "",
      email,
      role
    };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    navigate(-1);
  };

  const startEditing = () => {
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email || "");
    setRole(user.role || "");
    setEditing(true);
  };

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" />
      </button>
      
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />

      {/* Name Section */}
      <div className="mb-2">
        <b>Name: </b>
        {!editing && (
          <span className="wd-name text-danger fs-4" onClick={startEditing} style={{cursor: "pointer"}}>
            {user.firstName} {user.lastName}
          </span>
        )}
        {editing && (
          <FormControl 
            className="w-100 wd-edit-name"
            value={name}
            placeholder="First Last"
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { saveUser(); }
            }}
          />
        )}
      </div>

      <div className="mb-2">
        <b>Email: </b>
        {!editing && (
          <span className="wd-email" onClick={startEditing} style={{cursor: "pointer"}}>
            {user.email || "No email"}
          </span>
        )}
        {editing && (
          <FormControl 
            type="email"
            className="w-100 wd-edit-email"
            value={email}
            placeholder="user@example.com"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { saveUser(); }
            }}
          />
        )}
      </div>

      <div className="mb-2">
        <b>Role: </b>
        {!editing && (
          <span className="wd-roles" onClick={startEditing} style={{cursor: "pointer"}}>
            {user.role}
          </span>
        )}
        {editing && (
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="form-select w-100 wd-edit-role"
            onKeyDown={(e) => {
              if (e.key === "Enter") { saveUser(); }
            }}
          >
            <option value="STUDENT">Student</option>
            <option value="TA">Teaching Assistant</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Administrator</option>
          </select>
        )}
      </div>

      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
      <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
      
      <hr />
      
      <div className="d-flex justify-content-between align-items-center">
        <button onClick={() => navigate(-1)} className="btn btn-secondary wd-cancel">
          Cancel
        </button>
        
        <div>
          {!editing && (
            <FaPencil 
              onClick={startEditing}
              className="fs-5 me-3 wd-edit" 
              style={{cursor: "pointer"}}
            />
          )}
          {editing && (
            <FaCheck 
              onClick={saveUser}
              className="fs-5 me-3 wd-save text-success" 
              style={{cursor: "pointer"}}
            />
          )}
          
          <button onClick={() => deleteUser(uid)} className="btn btn-danger wd-delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}