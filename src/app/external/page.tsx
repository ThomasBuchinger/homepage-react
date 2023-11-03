import { Grid } from '@mui/material'
import BaseComponent from '@/components/baseelement'


export default function Home() {
  return (
      <Grid container spacing={10} direction={"column"} justifyContent={"space-around"}>
        <BaseComponent name="Blackbox Checks" checks={[
          "server 1",
          "server 2",
          "server 3"
        ]} />
        <BaseComponent name="S3" checks={[
          "Fnd me",
        ]} />
      </Grid>
  )
}
