import React from 'react'
import { Link } from "react-router-dom";
     
function Mobnav() {
    const list= document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item)=>
    item.addEventListener('click',activeLink));



  return (  
    <section>
 
   
    <div className='absolute bottom-0 flex flex-col justify-end w-full h-screen'>
       
        <div id="bottomnavbar" className="lg:hidden navigation">
        <ul className="flex items-center justify-around pt-3 pb-2 bg-white shadow-inner rounded-t-xl h-14 font-pops -z-20">
             
            <li  className="z-10 list active">
                <Link to="/Thome" className="navstyle group">
                    <span className="mx-6 ">
                    <i className="uil uil-home icon"></i>
                    </span>
                    <span className="text">HOME
                    </span>
                </Link>
            </li>

            <li  className="list">
                <Link to="/Tpath"  className="navstyle group">
                    <span className="mx-6">
                    <i className="uil uil-diary-alt icon"></i>
                    </span>  
                    <span className="text">PATH
                    </span>
                </Link>
            </li>

            <li className="list">
                <Link to="/Tcontact"  className="navstyle group">
                    <span className="mx-6 ">
                    <i className="uil uil-missed-call icon open:bg-black"></i>
                    </span>
                    <span className="text" open>CONTACT
                    </span>
                </Link>
            </li>   
 
            <li  className="list">
                <Link to="/Tadduser"  className="navstyle group">
                    <span className="mx-6 ">
                    <i className="uil uil-plus-circle icon"></i>
                    </span>
                    <span className="text">ADD
                    </span>
                </Link>
            </li>
 
            <li className="pr-3 list" >
                <Link to="/Tmore"  className="navstyle group">
                    <span className="mx-6"></span>
                    <i className="text-2xl uil uil-elipsis-double-v-alt icon"></i>
                    <span className="text">MORE
                    </span>
                </Link> 
            </li>  
            <li className="hidden"></li>
        </ul>
        </div>
    </div>

    </section>
  )
}

export default Mobnav