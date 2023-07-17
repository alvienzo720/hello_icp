import { signOut } from "@junobuild/core";

const handleLogout = async () => {
    try {
        await signOut;
    } catch (error) {
        console.log(error);

    }
}
export const Logout = () => {
    return (
        <div>
            <button type="button" onClick={handleLogout}>Logout</button>

        </div>)
}
