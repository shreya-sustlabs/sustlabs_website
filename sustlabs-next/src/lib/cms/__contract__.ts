/**
 * Type-only guard rail. Nothing here runs; it exists so `tsc` fails if a mapper
 * ever stops producing exactly what the section components expect.
 *
 * Without this, a drift between a Payload field and a component prop would only
 * show up as a runtime `undefined` on a live page.
 */
import type { SmartDbPageData } from '@/types'
import type { SmartDbPageContent, toSmartDbPage } from './smartDb'

/** Fails to compile unless `Actual` satisfies `Expected`. */
type Satisfies<Expected, Actual extends Expected> = Actual

// Each mapper's return type must satisfy the hand-written component contract.
export type SmartDbMapperMatchesComponents = Satisfies<
  SmartDbPageContent,
  ReturnType<typeof toSmartDbPage>
>

// ...and the page content must stay a faithful subset of the original shape,
// so a section cannot be silently dropped from the page.
export type SmartDbContentCoversOriginal = Satisfies<
  SmartDbPageContent,
  Omit<SmartDbPageData, 'layerSection'>
>
