import { memo } from 'react'
import type { MouseEvent } from 'react'
import type { SmartDbComparisonSectionData } from '../../types'
import { SmartDbTextLink } from '../ui/SmartDbTextLink'

type SmartDbComparisonSectionProps = {
  onLeadFormOpen?: (event: MouseEvent<HTMLAnchorElement>) => void
  section: SmartDbComparisonSectionData
}

function SmartDbComparisonSectionComponent({ section, onLeadFormOpen }: SmartDbComparisonSectionProps) {
  return (
    <section className="sdb-comparison" aria-labelledby="sdb-comparison-title">
      <div className="sdb-comparison__inner">
        <p className="sdb-eyebrow">{section.eyebrow}</p>

        <h2 className="sdb-title" id="sdb-comparison-title">
          <span>{section.titleLead}</span>
          <span className="sdb-title__accent">{section.titleAccent}</span>
        </h2>

        {/* The wrapper carries the right-edge fade; the inner div is the scroller. */}
        <div className="sdb-comparison__table-wrap">
          <div className="sdb-comparison__scroll">
            <table className="sdb-comparison__table">
              <thead>
                <tr>
                  {section.columns.map((column, index) => (
                    <th key={`${column}-${index}`} scope="col">
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
                        <th key={`${row[0]}-${index}`} scope="row">
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
        </div>

        <SmartDbTextLink
          action={section.action}
          eventSection="smart_db_comparison"
          onLeadFormOpen={onLeadFormOpen}
        />
      </div>
    </section>
  )
}

export const SmartDbComparisonSection = memo(SmartDbComparisonSectionComponent)
