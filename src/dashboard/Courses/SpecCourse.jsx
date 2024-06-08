import React, { useEffect ,useContext } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext, route } from '../../App';


const SpecCourse = () => {
    const {setLoading} = useContext(AppContext)
    const param = useParams()
    useEffect(() => {
        console.log(`${route}/course/${param.id}`);
        setLoading(true); 
        fetch(
          `${route}/course/${param.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
    
          })
          .finally(() => setLoading(false));
      }, []);
  return (
    <div>SpecfewfewfewfewfwefCourse</div>
  )
}

export default SpecCourse