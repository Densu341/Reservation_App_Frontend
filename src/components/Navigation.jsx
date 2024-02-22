import React from "react";

const Navigation = () => {
  return (
    <div className="container-fluid flex justify-between items-center p-4 bg-slate-900">
      <h1 className="text-white text-2xl font-bold">Roemah Djogja</h1>
      <button className="py-2 px-3 bg-slate-700 m-2 rounded-md text-slate-50 hover:bg-slate-800">
        Logout
      </button>
    </div>
  );
};

export default Navigation;
