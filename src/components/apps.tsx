import { Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Link, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { AppLauncherComponent, ApplicationButton } from "./baseelement";
import App from "next/app";
import { useHealthCheck } from "@/util/checks";

const grid_size = "auto"

export function GitopsEvergreen() {
  return <Grid item xs={grid_size}>
    <Card>
      <CardHeader title="Evergreen - Gitops" titleTypographyProps={{ variant: "h6" }}
        avatar={<Image src="/icons/github-mark.svg" alt="Edit DNS Entried" width={25} height={25} />} />
      <CardContent>
        <Typography>Edit DNS Settings</Typography>
        <Button  href={"https://github.com/ThomasBuchinger/voodoo-gitops/blob/main/gitops/pihole/pihole-helm.yaml#L48"} target="_blank" >DNS config</Button>
      </CardContent>
      <CardContent >
        <Typography>Certificates for Prod</Typography>
        <Button href={"https://github.com/ThomasBuchinger/voodoo-gitops/blob/main/gitops/stuff/prod/certs.yaml"} target="_blank" >Certificates</Button>
        <Button href={"https://github.com/ThomasBuchinger/voodoo-gitops/blob/main/gitops/vault/instance/patch-vault-content.yaml"} target="_blank" >Vault Import</Button>
      </CardContent>
      <CardContent>
        <Typography>Gatus Uptime</Typography>
        <Button href={"https://github.com/ThomasBuchinger/voodoo-gitops/blob/main/gitops/gatus/gatus-config.yaml"} target="_blank" >Open Config</Button>
      </CardContent>
    </Card>
  </Grid>
}
export function OpenApps() {
  return <Grid item xs={5}>
    <Stack spacing={1}>
      <AppLauncherComponent name="Production">
        <ApplicationButton href="https://paperless.buc.sh" icon="paperless-square.svg" text="Paperless" />
        <ApplicationButton href="http://10.0.0.20:30024/" icon="qbittorrent-new-light.svg" text="qBittorrent" />
        <ApplicationButton href="https://syncthing.buc.sh" icon="syncthing-logo-128.png" text="Syncthing" />
        <ApplicationButton href="http://files.bus.sh" icon="kubernetes-pv-labeled.svg" text="iSCSI Files" />
      </AppLauncherComponent>

      <AppLauncherComponent name="Utility">
        <Button variant="outlined" href={""} target="_blank">PDF Utils</Button>
      </AppLauncherComponent>

      <AppLauncherComponent name="Trial Apps">
        <Button variant="outlined" href={""} target="_blank">KASM</Button>
        <Button variant="outlined" href={""} target="_blank">LocalAI</Button>
        <Button variant="outlined" href={""} target="_blank">IT Tools (?)</Button>
        <ApplicationButton href="http://paste.buc.sh" icon="wastebin-logo.png" text="Wastebin" />
      </AppLauncherComponent>
    </Stack>
  </Grid>
}
export function OpenApps2() {
  return <Grid item xs={3}>
    <Stack spacing={1}>
      <AppLauncherComponent name="Infrastructure">
        <ApplicationButton href="https://grafana.buc.sh" icon="grafana-logo.svg" text="Grafana" />
        <ApplicationButton href="https://vault.buc.sh/ui/" icon="vault.svg" text="Vault" />
        <ApplicationButton href="http://s3.buc.sh:9002/" icon="minio-logo-old.webp" text="Minio" />

      </AppLauncherComponent>
      <AppLauncherComponent name="Other">
        <ApplicationButton href="http://status.buc.sh" icon="React Logo.svg" text="Homepage-React" />
        <ApplicationButton href="http://gatus.10.0.0.16.nip.io/" icon="gatus.svg" text="Gatus" />
        <ApplicationButton href="http://pihole.10.0.0.16.nip.io/admin/" icon="Pi-hole_vector_logo.svg" text="Pihole" />
      </AppLauncherComponent>

      <ContainerImages />
    </Stack>
  </Grid>
}

export function ContainerImages() {
  return <Grid item xs={12}>
    <Card>
      <CardHeader title="Images" />
      <CardContent>
        <Typography>docker.io/node:latest: outdated </Typography>
        <Typography>ghcr.io.io/thomasbuchinger/nas-lcd:latest: ok</Typography>
        <Typography>ghcr.io.io/thomasbuchinger/homepage-react:latest: ok</Typography>
        <Typography><Button>Update Repo</Button> argocd:2.5.4: outdated</Typography>
      </CardContent>
    </Card>
  </Grid>

}