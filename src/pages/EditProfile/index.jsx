import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { patchUser } from "../../libs/firebaseFunctions";
import Banner from "../../Components/Banner";
import style from "../../libs/Form.module.scss";


const EditProfile = () => {
    const userLogged = useSelector((state) => state.user);
    const [banner, setBanner] = useState(false);
    const [color, setColor] = useState();
    const [user, setUser] = useState(userLogged)


    const handleUpdate = (e) => {
        e.preventDefault();
        setBanner(false)
        patchUser(userLogged.id, user, setColor);
        setBanner(true)
    }

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.wrapper_form}>
                    <form onSubmit={handleUpdate}>
                        <h2> Modifica Profilo </h2>

                        <div className={style.wrapper_item}>
                            {/* <label> Anteprima foto </label> */}
                            <img src={user.photo || userLogged.photo} alt={user.name || userLogged.name}></img>
                        </div>

                        <div className={style.wrapper_item}>
                            <label> Photo </label>
                            <input onChange={(e) => setUser({ ...user, photo: e.target.value })} type="text" placeholder={userLogged.photo} />
                        </div>

                        <div className={style.wrapper_item}>
                            <label> Nome </label>
                            <input onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" placeholder={userLogged.name} />
                        </div>

                        <div className={style.wrapper_item}>
                            <label> Cognome </label>
                            <input onChange={(e) => setUser({ ...user, lastname: e.target.value })} type="text" placeholder={userLogged.lastname} />
                        </div>

                        <button>Invia Modifiche</button>
                        {banner && <Banner value={color} />}
                    </form>
                    <p>Torna alla <Link to="/home">Home</Link> </p>
                </div>
            </div>

        </>
    )
}

export default EditProfile;