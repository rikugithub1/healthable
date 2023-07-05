import SearchInput from '@/components/SearchInput'

export default function ExploreLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* Include shared UI here e.g. a header or sidebar */}
      <SearchInput />
      {children}
    </section>
  )
}