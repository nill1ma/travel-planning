import Avatar from "../../atoms/Avatar";
import Button from "../../atoms/Button";
const Header = () => {
    return (
        <header className="h-[20%] w-full bg-stone-800 flex justify-between items-center pr-10">
                <div className="flex justify-center gap-2 w-[15%]">
                    <Avatar size="large" label="Travel Planning" />
                </div>
                <Button className="flex rounded-sm" variant="primary" size="small">Create</Button>  
        </header>
    )
}

export default Header
