import React, {lazy, Suspense} from "react"
import DelayForPreparing from "../../../../../Components/DelayComponent/DelayForPreparing";
import { useStyles } from "../../../../MakeStyles/MakeStyles"
const ContainerC2 = lazy(() => {
    return new Promise((resolve: any) => {
      setTimeout(() => resolve(import("./Container/ContainerC2")), 2000);
    });
  });

const Component2= ()=> {
    const classes= useStyles()
    return (
        <div className={classes.component2} style={{position: 'relative'}}>
            <Suspense fallback={<DelayForPreparing />}>
                <ContainerC2 />
            </Suspense>
        </div>
    )
}

export default React.memo(Component2)