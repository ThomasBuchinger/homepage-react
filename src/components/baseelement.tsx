'use client'
import { CheckResult } from '@/util/checks'
import { Check, Circle, Close,Pause } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardHeader, CircularProgress, Grid, IconButton, Link, Stack, Tooltip, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function BaseComponent(props: any) {
  var checks = props.checks || ["Nothing"]
  return (
    <Grid xs={3} item>
      <Card>
        <CardHeader title={props.name}></CardHeader>
        {checks.map((c: any) => <CheckStatus key={c} text={c}/> )}
      </Card>
    </Grid>
  )
}

export function AppLauncherComponent(props: any) {
  return <Card>
    <CardHeader title={props.name} titleTypographyProps={{ variant: "h6" }} />
    <CardContent >
      <Stack direction="row" spacing={5} justifyContent={"space-around"}>
        {props.children}
      </Stack>
    </CardContent>
  </Card>

}

export function CheckStatus({text}: { text: string }){
  return (
    <CardContent>
      <Typography>Check: {text}</Typography>
    </CardContent>
  )
}

export function ElementHeader(props: any) {
  const name = props.name || "Unnamed"
  const ipAddress = props.ip || "0.0.0.0"
  const checkResults = props.checks || []
  const enableCockpit = props.cockpit || false
  const enableTruenas = props.truenas || false
  const enableArgocd = props.argocd || false
  const okd = props.okd || ""
  const repo = props.github || ""
  const ipmi_ip = props.ipmi || ""

  const all_checks_passed = checkResults.every((c: CheckResult) => c.state === "ok")
  const links = [
  ]
  return (
    <>
      <CardHeader
        title={name}
        subheader={ipAddress}
        titleTypographyProps={{variant: "h6"}}
        subheaderTypographyProps={{variant: "h6"}}
        avatar={<Circle htmlColor={all_checks_passed ? "green" : "red"} />}
        action={<>
          <ElementLinkOkdConsole url={okd} enabled={okd !== ""} />
          <ElementLinkCockpitConsole ip={ipAddress} enabled={enableCockpit} />
          <ElementLinkIpmi ipmi_ip={ipmi_ip} enabled={ipmi_ip !== "" } />
          <ElementLinkTruenasScale ip={ipAddress} enabled={enableTruenas} />
          <ElementLinkArgocd ip={ipAddress} enabled={enableArgocd} />
          <ElementLinkGithub repo={repo} enabled={repo !== ""} />
          </>}
        />
      <ElementCheckRunner results={checkResults} />
    </>
  )

}

export function ElementCheckRunner(props: any){
  const iconMap: any = {
    "ok": <Check htmlColor='green' />,
    "na": <Pause htmlColor='blue' />,
    "running": <CircularProgress variant='indeterminate' size={15}/>,
    "fail": <Close htmlColor='red' />,
  }
  const results = props.results || []
  const errors = results.filter((r: CheckResult) => r.state !== "ok")
  const [expandChecks, setExpandChecks] = React.useState(errors.length == 0)
  const toggleExpand = () => { setExpandChecks(!expandChecks) }

  if (!expandChecks && errors.length === 0) {
    const tooltip = results.map((r: CheckResult) => r.name).join(", ")
    return <Tooltip title={tooltip} onClick={ toggleExpand }>
      <CardContent>Status: {results.length - errors.length}/{results.length} Healthchecks passed</CardContent>
      </Tooltip>
  }

  return (
    <CardContent onClick={ toggleExpand }>
      {results.map((e: CheckResult)=>{
        return <>
          <Typography key={"status-" + e.name} variant='h6'>{(iconMap[e.state])} Check: &quot;{e.name}&quot;</Typography>
          <Typography key={"log-"+e.name}>{e.message}</Typography>
        </>
      })}
    </CardContent>
  )
}

export function ElementLinkOkdConsole({ url, enabled }: {url: string, enabled: boolean}) {
  return (
    enabled ? <Link href={"http://" + url} target='_blank'><Image src={"/icons/kubernetes-icon-color.svg"} alt="Open ODK Console" width={50} height={50}></Image></Link>
    : <></>
  )
}
export function ElementLinkCockpitConsole({ ip, enabled }: { ip: string, enabled: boolean }) {
  return (
    enabled ? <Link href={"http://" + ip + ":9090"} target='_blank'><Image src={"/icons/cockpit.png"} alt="Open Cockpit Console" width={50} height={50} ></Image></Link>
      : <></>
  )
}
export function ElementLinkTruenasScale({ ip, enabled }: { ip: string, enabled: boolean }) {
  return (
    enabled ? <Link href={"http://" + ip + "/ui"} target='_blank'><Image src={"/icons/logo-TrueNAS-Scale-compressor.webp"} alt="Open Cockpit Console" width={50} height={50} ></Image></Link>
      : <></>
  )
}
export function ElementLinkArgocd({ ip, enabled }: { ip: string, enabled: boolean }) {
  return (
    enabled ? <Link href={"http://argocd." + ip + ".nip.io"} target='_blank'><Image src={"/icons/argo-icon-color.svg"} alt="Open Cockpit Console" width={50} height={50} ></Image></Link>
      : <></>
  )
}
export function ElementLinkGithub({ repo, enabled }: { repo: string, enabled: boolean }) {
  return (
    enabled ? <Link href={"https://github.com/thomasbuchinger/" + repo} target='_blank'><Image src={"/icons/github-mark.svg"} alt="Open Cockpit Console" width={45} height={45} style={{ padding: "5px" }}></Image></Link>
      : <></>
  )
}
export function ElementLinkIpmi({ ipmi_ip, enabled }: { ipmi_ip: string, enabled: boolean }) {
  return (
    enabled ? <Link href={"http://" + ipmi_ip} target='_blank'><Image src={"/icons/ipmi.svg"} alt="Open IPMI Interface" width={60} height={60} ></Image></Link>
      : <></>
  )
}
export function ElementLinkTailscale({enabled }: { enabled: boolean }) {
  return (
    enabled ? <Link href={"https://login.tailscale.com/admin/machines"} target='_blank'><Avatar src={"/icons/tailscale-logo.png"} alt="Open Tailscale Admin Console" sx={{width: "50px", height: "50px"}}></Avatar></Link>
      : <></>
  )
}

export function ApplicationButton({href, icon, text}: {href: string, icon: string, text: string}){
  const size = 50
  return <IconButton href={href} target='_blank'>
    <Box>
      <Image src={"/icons/" + icon} alt={text} width={size} height={size} />
      <Typography color={"primary"}>{text}</Typography>
    </Box>
  </IconButton>
}