import React from "react";

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-3 text-center">
      <a className="text-white mr-2" href="index.html">
        {" "}
        Dev Community
      </a>
      <small>Copyright &copy; {new Date().getFullYear()}</small>
    </footer>
  );
};
