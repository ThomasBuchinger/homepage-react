'use client'
import { Card, CardContent, Grid } from "@mui/material";
import { ElementHeader } from "./baseelement";
import { CheckDebuggerFunction, CheckMetric, CheckUrlViaBackend, useHealthCheck } from "@/util/checks";

const cardSize = 3

export function Evergreen() {
  const ipAddress="10.0.0.16"
  const name="Evergreen"
  const console_url = "evergreen-console."+ipAddress+".nip.io"
  const healthChecks = [
    useHealthCheck("Cockpit Console reachable", { url: "http://" + ipAddress + ":9090", expected_status: 301 }, CheckUrlViaBackend),
    useHealthCheck("OKD Console reachable", { url: "http://" + console_url }, CheckUrlViaBackend),
    useHealthCheck("NodeExporter is running", { url: "http://" + ipAddress + ":9100/metrics", metric: "node_exporter_build_info" }, CheckMetric),
    useHealthCheck("PiHole (WebUI) is up", { url: "http://pihole." + ipAddress + ".nip.io", expected_status: 403 }, CheckUrlViaBackend),
    useHealthCheck("Ingress is up", { url: "http://" + ipAddress + "/non-existent", expected_status: 404 }, CheckUrlViaBackend),
    useHealthCheck("Vault is running", { url: "https://"+ipAddress+"/ui/", expected_status: 200, host: "vault.buc.sh" }, CheckUrlViaBackend),
  ]
  return (
    <Grid xs={cardSize} item>
      <Card>
        <ElementHeader name={name} ip={ipAddress} checks={healthChecks} cockpit={true} okd={console_url} github="voodoo-gitops" />
        <CardContent>TODO: CertManager certificate expireation metrics</CardContent>
        <CardContent>Monitor DDNS update Job via KubeStateMetrics</CardContent>
      </Card>
    </Grid>
  )
}

export function NAS() {
  const ipAddress = "10.0.0.20"
  const name = "NAS"
  const healthChecks = [
    useHealthCheck("TrueNAS Dashboard is running", { url: "http://" + ipAddress, expected_status: 302 }, CheckUrlViaBackend),
    useHealthCheck("NodeExporter is running", { url: "http://" + ipAddress + ":9100/metrics", metric: "node_exporter_build_info" }, CheckMetric),
    useHealthCheck("Raidpool online", { url: "http://" + ipAddress + ":9100/metrics", metric: "node_zfs_zpool_state", labels: { state: "online", zpool: "raidpool" }, value: "1" }, CheckMetric),
    useHealthCheck("LCD-Scrren Container up", { url: "http://" + ipAddress + ":8080/metrics", metric: "kube_deployment_status_replicas", labels: { deployment: "lcd-screen-ix-chart" }, value: "1" }, CheckMetric),
    useHealthCheck("Minio Container up", { url: "http://" + ipAddress + ":8080/metrics", metric: "kube_deployment_status_replicas", labels: { deployment: "minio" }, value: "1" }, CheckMetric),
    useHealthCheck("Qbittorrent Container up", { url: "http://" + ipAddress + ":8080/metrics", metric: "kube_deployment_status_replicas", labels: { deployment: "qbittorrent" }, value: "1" }, CheckMetric),
    // setupHealthCheck("test", { state: "na"}, CheckDebuggerFunction),
  ]
  return (
    <Grid xs={cardSize} item>
      <Card>
        <ElementHeader name={name} ip={ipAddress} checks={healthChecks} truenas={true} />
        <CardContent>Maybe MV List?</CardContent>
        <CardContent>BS13 Replication status</CardContent>
        <CardContent>Backblaze B2 Backup status?</CardContent>
      </Card>
    </Grid>
  )
}

export function ProdK8s() {
  const ipAddress = "10.0.0.21"
  const name = "Prod"
  const console_url = "prod." + ipAddress + ".nip.io"
  const healthChecks = [
    useHealthCheck("OKD Console reachable", { url: "http://" + console_url }, CheckUrlViaBackend),
    useHealthCheck("ArgoCD reachable", { url: "https://" + ipAddress, host: "argocd.buc.sh" }, CheckUrlViaBackend),
    useHealthCheck("Velero? running", { state: "na" }, CheckDebuggerFunction),
    useHealthCheck("PV mounted over iSCSI", { state: "na" }, CheckDebuggerFunction),
    useHealthCheck("Grafana/prometheus queryable", { state: "na" }, CheckDebuggerFunction),
  ]
  return (
    <Grid xs={cardSize} item>
      <Card>
        <ElementHeader name={name} ip={ipAddress} checks={healthChecks} okd={console_url} argocd={true} github="prod-gitops" />
      </Card>
    </Grid>
  )
}

export function H3() {
  const ipAddress = "10.0.0.14"
  const name = "H3"
  const healthChecks = [
    useHealthCheck("Cockpit Console reachable", { url: "http://" + ipAddress + ":9090", expected_status: 301 }, CheckUrlViaBackend),
    useHealthCheck("NodeExporter is running", { url: "http://" + ipAddress + ":9100/metrics", metric: "node_exporter_build_info" }, CheckMetric),
  ]
  return (
    <Grid xs={cardSize} item>
      <Card>
        <ElementHeader name={name} ip={ipAddress} checks={healthChecks} cockpit={true} />
        <CardContent>Node Exporter</CardContent>
      </Card>
    </Grid>
  )
}
export function KVM() {
  const ipAddress = "10.0.0.13"
  const name = "KVM"
  const healthChecks = [
    useHealthCheck("Cockpit Console reachable", { url: "http://" + ipAddress + ":9090", expected_status: 301 }, CheckUrlViaBackend),
    // setupHealthCheck("NodeExporter is running", { url: "http://" + ipAddress + ":9100/metrics", metric: "node_exporter_build_info" }, CheckMetric),
  ]
  return (
    <Grid xs={cardSize} item>
      <Card>
        <ElementHeader name={name} ip={ipAddress} checks={healthChecks} cockpit={true} />
        <CardContent>Maybe VM list?</CardContent>
      </Card>
    </Grid>
  )
}
