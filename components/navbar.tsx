"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => {
  const handleClick = () => { }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <Image src="./logo.svg" width={100} height={30} alt="logo" />
        <CustomButton
          btnType="button"
          isDisabled={false}
          title="Sign Up"
          handleClick={handleClick}
          btnColor="btn btn-info" />
      </div>
    </nav>
  );
}

export default NavBar;