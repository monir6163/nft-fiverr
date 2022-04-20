export default function ErrorMessage({ message }) {
    if (!message) {
        return null;
    } else {
        return (
            <div className="alert alert-danger mt-5">
                <div className="flex-1">
                    <label>{message}</label>
                </div>
            </div>
        );
    }
}
