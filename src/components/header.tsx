import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import nuberLogo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useMe } from "../hooks/useMe";
import { useApolloClient } from "@apollo/client";

export const Header: React.FC = () => {
  const { data } = useMe();
  const client = useApolloClient();
  return (
    <>
      {!data?.me.verified && (
        <div className="bg-red-500 p-3 text-center text-base text-white">
          <span>Please verify your email.</span>
        </div>
      )}
      <header className="py-4">
        <div className="w-full px-5 xl:px-0 max-w-screen-xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={nuberLogo} className="w-44" alt="Nuber Eats" />
          </Link>
          <a>{data?.me.email}</a>
          <span className="text-xs">
            <Link to="/edit-profile">
              <FontAwesomeIcon icon={faUser} className="text-3xl" />
            </Link>
          </span>
        </div>
      </header>
    </>
  );
};
