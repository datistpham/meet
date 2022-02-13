import { CircularProgress } from "@mui/material";
import React, {lazy, Suspense} from "react"
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
            <Suspense fallback={<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999}}><CircularProgress /></div>}>
                <ContainerC2 />
            </Suspense>
        </div>
    )
}

export default React.memo(Component2)