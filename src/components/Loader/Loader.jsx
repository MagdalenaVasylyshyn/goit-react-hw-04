import css from "./Loader.module.css"
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
    return (
        <div className={css.container}>
            <ThreeDots
                visible={true}
                height="40"
                width="40"
                color="#008000"
                radius="8"
                ariaLabel="three-dots-loading"
            />
            <p>
                <strong>Loading</strong>
            </p>
        </div>
    )
}