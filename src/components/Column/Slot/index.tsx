import { CasinoOutlined } from '@mui/icons-material';
import './Slot.css';

interface SlotProps {
    number?: number;
}
export const Slot = ({ number = 0 }: SlotProps) => {
    if (number != 0) {
        const id = `_${number}`;
        return (
            <label htmlFor={id}>
                {number}
                <input type="checkbox" id={id} />
            </label>
        );
    } else {
        return (
            <label htmlFor="dice">
                <CasinoOutlined className="icon" />
                <input type="checkbox" id="dice" checked />
            </label>
        );
    }
};
