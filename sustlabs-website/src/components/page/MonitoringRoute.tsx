import { Navigate, useParams } from 'react-router-dom'
import { MONITORING_PRODUCTS } from '../../utils/constants'
import { MonitoringPage } from './MonitoringPage'

const DEFAULT_MONITORING_PATH = MONITORING_PRODUCTS[0].path

export function MonitoringRoute() {
  const { slug } = useParams()
  const monitoringProduct = MONITORING_PRODUCTS.find((product) => product.path.endsWith(`/${slug}`))

  if (!monitoringProduct) {
    return <Navigate replace to={DEFAULT_MONITORING_PATH} />
  }

  return <MonitoringPage data={monitoringProduct} />
}
