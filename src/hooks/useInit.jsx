import { useDispatch } from 'react-redux'
import { loadTeams, loadLanguages, loadBanners } from '../redux/actions'
import { useEffect } from 'react'
const useInit = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadTeams())
    dispatch(loadLanguages())
    dispatch(loadBanners())
  }, [dispatch])
}

export default useInit
