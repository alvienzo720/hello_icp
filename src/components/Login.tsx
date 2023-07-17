import { signIn } from "@junobuild/core"

const handleSignIn = async () => {
    try {
        await signIn();
    } catch (error) {
        console.log(error);

    }
}
export const Login = () => {
    return (
        <div>
            <button type="button" onClick={handleSignIn}>Login</button>

        </div>)
}
