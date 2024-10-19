import '@mantine/core/styles.css'

import {
  createRootRouteWithContext,
  Outlet,
  ScrollRestoration,
} from '@tanstack/react-router'
import {Body, Head, Html, Meta, Scripts} from '@tanstack/start'
import * as React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {queryClient} from '../query-client'
import {ColorSchemeScript, MantineProvider} from '@mantine/core'


interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  meta: () => [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'TanStack Start Starter',
    },
  ],
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet/>
    </RootDocument>
  )
}

function RootDocument({children}: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <ColorSchemeScript/>
        <Meta/>
      </Head>
      <Body>
        <MantineProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </MantineProvider>
        <ScrollRestoration/>
        <Scripts/>
      </Body>
    </Html>
  )
}
