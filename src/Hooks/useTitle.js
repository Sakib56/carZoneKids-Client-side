import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `CarZone Kids | ${title}`;
    }, [title])
}
export default useTitle;