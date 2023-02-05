import { FilterList, FilterListItem } from 'react-admin';
import ActiveIcon from '@mui/icons-material/ToggleOn';

export const HasActiveFilter = () => (
    <FilterList label="Is Active" icon={<ActiveIcon />}>
        <FilterListItem
            label="True"
            value={{ active: true }}
        />
        <FilterListItem
            label="False"
            value={{ active: false }}
        />
    </FilterList>
);