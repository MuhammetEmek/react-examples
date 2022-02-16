
import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
    return (
        <section className={classes.profile}>
            <h1>Kullanıcı Profili</h1>
            <ProfileForm></ProfileForm>
        </section>
    )
}

export default UserProfile;