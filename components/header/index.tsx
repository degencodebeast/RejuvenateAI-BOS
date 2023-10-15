"use client";
import { useEffect } from "react";
import { Link } from "@chakra-ui/next-js";
//import { useAccount } from "wagmi";
import RejuvenateAi from "../../images/svg/rejuvenate-logo.svg";
import { useAppContext } from "@app/context/state";
import RegisterForm from "../register-form";
// import {
//   ConnectKitButton,
// } from "connectkit";
import { useAuth } from "near-social-bridge";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Header = ({bg='transparent'}:{bg?:string}) => {

   const { setAddress } = useAppContext();
   //const { address } = useAccount();
   const auth = useAuth();
   const address = auth.user?.accountId; 

   const notLoggedInWarning = <p> You are not logged in </p>;

    useEffect(() => {
      setAddress(`${address}`);
    }, [address, setAddress]);
  
// const signIn = async() => {
//     if(auth.user) {

//     }else {
      
//     }
//   }

  return (
    <section className={`bg-${bg} px-2 max-w-[1300px] w-full py-1 flex justify-between items-center mx-auto`}>
        <div>
          <Link href={'/'} textDecor={'none'}>
            <RejuvenateAi />
          </Link>
        </div>
    <>
        {
        address ? (
             <>
          <label  className="btn bg-[#014421] h-[48px] px-5 lg:h-[50px] font-bold text-base lg:text-[20px] text-[#F5F5DC] rounded-xl" htmlFor="modal-1"> Register</label>
          <input className="modal-state" id="modal-1" type="checkbox" />
        </>
        ) : (
           //<ConnectKitButton />
           <Button colorScheme='blue' onClick={() => {auth.user? <RegisterForm /> : notLoggedInWarning}} > Connect wallet </Button>
        )
       }</>
    
    </section>
  );
};

export default Header;