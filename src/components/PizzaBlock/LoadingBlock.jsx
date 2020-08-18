import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="118" r="113" />
            <rect x="1" y="239" rx="6" ry="6" width="280" height="26" />
            <rect x="1" y="277" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="381" rx="6" ry="6" width="94" height="31" />
            <rect x="144" y="374" rx="20" ry="20" width="135" height="42" />
        </ContentLoader>
    )
}

export default LoadingBlock
