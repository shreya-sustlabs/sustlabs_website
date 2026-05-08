import { memo } from 'react'
import type { SmartDbComparisonSectionData } from '../../types'
import { SmartDbPill } from '../ui/SmartDbPill'

type SmartDbComparisonSectionProps = {
  section: SmartDbComparisonSectionData
}

function SmartDbComparisonSectionComponent({ section }: SmartDbComparisonSectionProps) {
  return (
    <section className="smart-db-page__comparison" aria-labelledby="smart-db-comparison-title">
      <div className="smart-db-page__comparison-heading">
        <SmartDbPill>{section.eyebrow}</SmartDbPill>
        <h2 id="smart-db-comparison-title" style={{ color: 'var(--black300)' }}>
          {section.titleLead} <span style={{ color: section.accent }}>{section.titleAccent}</span>
        </h2>
      </div>
      <div className="smart-db-page__table-wrap">
        <table className="smart-db-page__table">
          <thead>
            <tr>
              {section.columns.map((column, index) => (
                <th scope="col" key={`${column}-${index}`}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th scope="row" key={`${row[0]}-${index}`}>
                      {cell}
                    </th>
                  ) : (
                    <td key={`${row[0]}-${index}`}>{cell}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export const SmartDbComparisonSection = memo(SmartDbComparisonSectionComponent)
