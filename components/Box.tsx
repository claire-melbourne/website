import { ComponentPropsWithoutRef } from 'react'

import { Corners } from './Corners'

type BaseProps = {
  className?: string
  cornerColor?: string
  // todo:@josh why is ReactNode not working here
  children?: any // ReactNode
}

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'div'>, keyof BaseProps>

// todo:@josh why are we getting a console error for not forwarding the ref on this and other components
export function Box(props: Props) {
  return (
    <div className={`${props.className} relative z-0 bg-[#101826] p-8`}>
      <div className="absolute inset-0">
        <Corners color={props.cornerColor} />
      </div>
      {props.children}
    </div>
  )
}