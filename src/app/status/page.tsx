import { Grid } from '@mui/material'
import BaseComponent from '@/components/baseelement'
import { Evergreen, H3, KVM, NAS, ProdK8s } from '@/components/status'


export default function Home() {
  return (
      <Grid container spacing={2} justifyContent={"space-around"}>
        <Evergreen />
        <NAS />
        <ProdK8s />
        <H3 />
        <KVM />
        <BaseComponent name="Passive KVM" checks={[
          "Cockpit",
          "Nodeexporter"
        ]} />
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
  )
}
