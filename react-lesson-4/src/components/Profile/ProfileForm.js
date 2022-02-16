import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
    return(
       <form className={classes.form}>
           <div className={classes.control}>
               <label>New Password</label>
               <input type="password" id="new-password" minLength="7"></input>
           </div>
           <div className={classes.actions}>
               <button>Şifre Değiştir</button>
           </div>
       </form>
    )
}

export default ProfileForm;