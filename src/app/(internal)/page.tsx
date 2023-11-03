import styles from './page.module.css'
import { Divider, Grid, Stack } from '@mui/material'
import { Evergreen, NAS, ProdK8s } from '@/components/status'
import { GitopsEvergreen, HomepageOps, InfrastructureApps, ProductionApps, Tailscale, UtilityApps } from '@/components/apps'


export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ProductionApps />
        </Grid>
        <Grid item>
          <Tailscale />
        </Grid>
        <Grid item >
          <InfrastructureApps />
        </Grid>
        <Grid item xs={8}>
          <UtilityApps />
        </Grid>
        <Grid item xs={2}>
          <GitopsEvergreen />
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={2}>
            <HomepageOps />
          </Stack>
        </Grid>
        
        {/* <GitopsEvergreen />
        <Tailscale /> */}
      </Grid>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12}>
          <Divider className={styles.code} style={{ marginTop: "50px", marginBottom: "50px" }}> Status Overview</Divider>
        </Grid>
        <Evergreen />
        <NAS />
        <ProdK8s />
      </Grid>
    </>
  )
}
