import Modal from "@/app/ui/modal";
import { Login } from "@/app/ui/login";

export default function Page(): JSX.Element {
    return <div>
        <Modal>
            <Login />
        </Modal>
    </div>
}