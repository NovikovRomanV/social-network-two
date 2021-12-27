import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../Preloader/Preloader";


const ProfileInfo = (props: any) => {
    if(!props.profile){
        return <Preloader />
    }
    return(
        <div>
            <div>
                <img alt='fon'
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoI82dQ4RRe2jJboyhw2sLZofK-Kt8GhMQMg&usqp=CAU'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;