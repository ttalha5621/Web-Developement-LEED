import { useEffect } from 'react';

const ImportScript = (resourceUrl) => {
    console.log(resourceUrl);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceUrl;
        // script.defer = true;
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);
        console.log(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [resourceUrl]);

};
export default ImportScript;
