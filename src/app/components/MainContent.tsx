export default function MainContent({ children }: { children: JSX.Element }) {
  return (
    <div className='col-span-1 p-4 lg:p-12 lg:col-span-5 gap-6 flex flex-col justify-content-flex-start bg-stone-800 rounded-lg border-solid border-2 border-blue-800'>
      {children}
    </div>
  )
}
