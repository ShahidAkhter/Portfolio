import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const TopLoadingBar = () => {
    const [progress, setProgress] = useState(0)
    const location = useLocation()
    useEffect(() => {
        setProgress(100)
    }, [location]);
    return (
        <div>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(progress)}
            />
        </div>
    )
}

export default TopLoadingBar
