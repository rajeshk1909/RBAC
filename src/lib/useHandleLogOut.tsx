import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setIsUserLogIn, setCurrentUserData } from "../redux/features/userData"

const useHandleLogOut = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return () => {
    dispatch(setIsUserLogIn(false))
    navigate("/login")

    dispatch(
      setCurrentUserData({
        id: 0,
        name: "",
        email: "",
        password: "",
        role: "User",
        status: "Active",
      })
    )
  }
}

export default useHandleLogOut
