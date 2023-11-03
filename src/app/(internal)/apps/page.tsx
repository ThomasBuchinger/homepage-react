import { AppBar, Divider, Grid, Stack } from '@mui/material'
import { ContainerImages, GitopsEvergreen, InfrastructureApps, OtherApps, ProductionApps, Tailscale, TrialApps, UtilityApps } from '@/components/apps'


export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ProductionApps />
        </Grid>
        <Grid item>
          <UtilityApps />
        </Grid>
        <Grid item>
          <InfrastructureApps />
        </Grid>
        <Grid item>
          <Tailscale />
        </Grid>
        <Grid item>
          <TrialApps />
        </Grid>
        <Grid item>
          <OtherApps />
        </Grid>
        <Grid item>
         <GitopsEvergreen />
        </Grid>
        <Grid item>
          <ContainerImages />
        </Grid>
      </Grid>
    </>
  )
}