import React from "react";
import {getInitials} from "../../utils/helper"

const ProfileInfo = ({ onLogout }) => {

    return(
        <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-bold bg-slate-200">
                {getInitials("Alae Bouhmala")}
            </div>


        <div>
            <p  className="text-sm font-medium" >Alae Bouhmala</p>
            <button className="text-sm text-slate-900 underline" onClick={onLogout}> Logout </button>
        </div>
        </div>
        
    )
}

export default ProfileInfo;