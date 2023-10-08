import Image from 'next/image'
import styles from './page.module.css'
import { AppBar, Divider, Grid, Stack } from '@mui/material'
import BaseComponent from '@/components/baseelement'
import { Masonry } from '@mui/lab'
import SSRMasonry from '@/components/testcomponent'
import TitleBar from './header'
import { Evergreen, H3, KVM, NAS, ProdK8s } from '@/components/status'
import { DnsUpdate, OpenApps, OpenApps2 } from '@/components/apps'


export default function Home() {
  return (
    <>
    <TitleBar />
    <main style={{ margin: "50px"}}>


      <div className={styles.description}>
      </div>

        <Grid container spacing={2}>
          <OpenApps />
          <DnsUpdate />
          <OpenApps2 />
        </Grid>


        {/* <Grid container> */}
        <Grid container spacing={2} justifyContent={"center"}>
          {/* <Grid container spacing={2} xs={10}> */}

          <Grid item xs={12}>
            <Divider className={styles.code} style={{ marginTop: "50px", marginBottom: "50px" }}> Status Section</Divider>
          </Grid>


          <Evergreen />
          <NAS />
          <ProdK8s />
          <H3 />
          <KVM />
          <BaseComponent name="Network" checks={[
            "A1 router",
            "NG7 Router",
            "NG7oben AccessPoint",
            "Drucker",
            "Internet"
          ]} />
          <BaseComponent name="Bastion" checks={[
            "External HTTP",
            "External S3",
            "NG7oben AccessPoint",
            "Drucker",
            "Internet"
          ]} />
          </Grid>
        {/* </Grid> */}
     </main>
    </>
  )
}
