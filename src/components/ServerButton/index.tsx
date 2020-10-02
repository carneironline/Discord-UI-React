import React from 'react';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button className={selected ? 'active' : ''} isHome={isHome} hasNotifications={hasNotifications} mentions={mentions}>
            {isHome && <img src='https://svgshare.com/i/Pb9.svg' title='' alt='' />}
        </Button>
    );
}

export default ServerButton;
