import styles from './page.module.css'
import { Divider, Grid } from '@mui/material'
import { Evergreen, NAS, ProdK8s } from '@/components/status'
import { InfrastructureApps, ProductionApps, Tailscale, UtilityApps } from '@/components/apps'


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
