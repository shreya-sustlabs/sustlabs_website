import { memo } from 'react'
import type { InfrastructureUseCaseProps } from '../../types'

function InfrastructureUseCaseComponent({ description, title }: InfrastructureUseCaseProps) {
  return (
    <article className="infrastructure-use-case">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export const InfrastructureUseCase = memo(InfrastructureUseCaseComponent)
