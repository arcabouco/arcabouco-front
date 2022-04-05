import { createContext, useState } from 'react'
import { Software } from '../api/interfaces/Software'
import { Request } from '../api'

type SoftwareContext = {
  reload: () => Promise<void>
  softwares: Software[]
}

export const SoftwareContext = createContext({} as SoftwareContext)

export const SoftwareProvider = (props: { children: React.ReactNode }) => {
  const [softwares, setSoftwares] = useState<Software[]>([])

  const reload = async () => {
    Request.listSoftwares().then(setSoftwares)
  }

  return (
    <SoftwareContext.Provider value={{ reload, softwares }}>
      {props.children}
    </SoftwareContext.Provider>
  )
}
