import { createFileRoute, Outlet, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/_main')({
  component: AppFrameLayout,
})

function AppFrameLayout() {

  return (
    <div>
      <Outlet />
    </div>
  )
}
