import { useEffect } from "react";

 const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} / Cineweb`;
    });

  return null;
}

export default useTitle;