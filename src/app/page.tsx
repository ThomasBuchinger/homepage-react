import Image from 'next/image'
import styles from './page.module.css'
import { AppBar, Grid, Stack } from '@mui/material'
import BaseComponent from '@/components/baseelement'
import { Masonry } from '@mui/lab'
import SSRMasonry from '@/components/testcomponent'
import TitleBar from './header'
import { Evergreen, H3, KVM, NAS } from '@/components/evergreen'


export default function Home() {
  return (
    <>
    <TitleBar />
    <main className={styles.main}>


      <div className={styles.description}>
      </div>

      <div className={styles.main}>
        <Grid spacing={2} container columnSpacing={2} rowSpacing={2}>
          <Evergreen />
          <NAS />
          <BaseComponent name="prod" checks={[
            "Kubernetes Dashboard",
            "ArgoCD is Up",
            "velero? is up",
            "PVs are mounted over iSCSI",
            "Grafana Link",
            "Prometheus for advanced metrics",
          ]} />
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
       </div>
     </main>
    </>
  )
}
