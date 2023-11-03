import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { AppLauncherComponent, ApplicationButton, ElementLinkTailscale } from "./baseelement";

const grid_size = "auto"

export function GitopsEvergreen() {
  return <Card>
    <CardHeader title="Evergreen - Gitops" titleTypographyProps={{ variant: "h6" }}
      avatar={<Image src="/icons/github-mark.svg" alt="Edit DNS Entried" width={25} height={25} />} />
    <CardContent>
      <Typography>Edit DNS Settings</Typography>
      <Button href={"https://github.com/ThomasBuchinger/voodoo-gitops/blob/main/gitops/pihole/pihole-helm.yaml#L48"} target="_blank" >DNS config</Button>
    </CardContent>
    <CardContent >
      <Typography>Certificates for Prod</Typography>
      <Button href={"https://github.com/ThomasBuchinger/voodoo-gitops/blob/main/gitops/stuff/prod/certs.yaml"} target="_blank" >Certificates</Button>
      <Button href={"https://github.com/ThomasBuchinger/voodoo-gitops/blob/main/gitops/vault/instance/patch-vault-content.yaml"} target="_blank" >Vault Import</Button>
    </CardContent>
  </Card>
}
export function HomepageOps() {
  return <Card>
    <CardHeader title="Homepage" titleTypographyProps={{ variant: "h6" }}
      avatar={<Image src="/icons/github-mark.svg" alt="Edit DNS Entried" width={25} height={25} />} />
    <CardContent>
      <Typography>Renovate PRs</Typography>
      <Button href={"https://github.com/ThomasBuchinger/homepage-react/pulls"} target="_blank" >Open PRs</Button>
      <Button href={"http://evergreen-console.10.0.0.16.nip.io/k8s/ns/homepage/core~v1~Pod"} target="_blank" >Delete Pod</Button>
    </CardContent>
  </Card>
}

export function ProductionApps() {
  return (
    <AppLauncherComponent name="Production">
      <ApplicationButton href="https://paperless.buc.sh" icon="paperless-square.svg" text="Paperless" />
      <ApplicationButton href="http://10.0.0.20:30024/" icon="qbittorrent-new-light.svg" text="qBittorrent" />
      <ApplicationButton href="https://syncthing.buc.sh" icon="syncthing-logo-128.png" text="Syncthing" />
      <ApplicationButton href="http://files.bus.sh" icon="kubernetes-pv-labeled.svg" text="iSCSI Files" />
    </AppLauncherComponent>
  )
}
export function UtilityApps() {
  return (
    <AppLauncherComponent name="Utility">
      <ApplicationButton href="http://pdf.bus.sh" icon="stirling-transparent.svg" text="PDF Tools" />
      <ApplicationButton href="https://ittools.tech" icon="ittools-logo.png" text="IT Tools" />
      <ApplicationButton href="http://paste.buc.sh" icon="wastebin-logo.png" text="Wastebin" />
    </AppLauncherComponent>
  )
}
export function TrialApps() {
  return (
    <AppLauncherComponent name="Trial Apps">
      <Button variant="outlined" href={""} target="_blank">KASM</Button>
      <Button variant="outlined" href={""} target="_blank">LocalAI</Button>
    </AppLauncherComponent>
  )
}
export function InfrastructureApps() {
  return (
    <AppLauncherComponent name="Infrastructure">
      <ApplicationButton href="https://grafana.buc.sh" icon="grafana-logo.svg" text="Grafana" />
      <ApplicationButton href="https://vault.buc.sh/ui/" icon="vault.svg" text="Vault" />
      <ApplicationButton href="http://s3.buc.sh:9002/" icon="minio-logo-old.webp" text="Minio" />
    </AppLauncherComponent>
  )
}
export function OtherApps() {
  return (
    <AppLauncherComponent name="Other">
      <ApplicationButton href="http://status.buc.sh" icon="React Logo.svg" text="Homepage-React" />
      <ApplicationButton href="http://gatus.10.0.0.16.nip.io/" icon="gatus.svg" text="Gatus" />
      <ApplicationButton href="http://pihole.10.0.0.16.nip.io/admin/" icon="Pi-hole_vector_logo.svg" text="Pihole" />
    </AppLauncherComponent>
  )
}
export function AppIdeas() {
  return (
    <ContainerImages />
  )
}



export function ContainerImages() {
  return <Card>
    <CardHeader title="Images"/>
    <CardContent>
      <Typography>docker.io/node:latest: outdated </Typography>
      <Typography>ghcr.io.io/thomasbuchinger/nas-lcd:latest: ok</Typography>
      <Typography>ghcr.io.io/thomasbuchinger/homepage-react:latest: ok</Typography>
      <Typography><Button>Update Repo</Button> argocd:2.5.4: outdated</Typography>
    </CardContent>
  </Card>

}
export function Tailscale(){
  return (
    <Card>
      <CardHeader title="Tailscale" subheader="infinite.void@outlook.com" subheaderTypographyProps={{marginRight: "20px"}} action={
        <ElementLinkTailscale enabled={true} />
      } />
      <CardActions>
        <Button variant="outlined" href={""} target="_blank">PiKVM Mini</Button>
        <Button variant="outlined" disabled={true} href={""} target="_blank">PiKVM AIO</Button>
      </CardActions>
    </Card>
  )
}
