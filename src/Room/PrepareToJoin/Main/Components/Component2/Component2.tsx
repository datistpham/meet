import React, {lazy, Suspense} from "react"
import { useStyles } from "../../../../MakeStyles/MakeStyles"
const ContainerC2 = lazy(() => {
    return new Promise((resolve: any) => {
      setTimeout(() => resolve(import("./Container/ContainerC2")), 700);
    });
  });

const Component2= ()=> {
    const classes= useStyles()
    return (
        <div className={classes.component2}>
            <Suspense fallback={<div></div>}>
                <ContainerC2 />
            </Suspense>
        </div>
    )
}

export default React.memo(Component2)