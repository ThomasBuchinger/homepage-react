'use client'
import { CheckResult } from '@/util/checks'
import { Check, CheckCircleRounded, CheckOutlined, CheckRounded, Circle, Clear, Close, Loop, Pause } from '@mui/icons-material'
import { Button, Card, CardContent, CardHeader, CardMedia, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Icon, IconButton, Link, MobileStepper, Step, StepConnector, StepLabel, Stepper, TextField, TextareaAutosize, Tooltip, Typography, stepButtonClasses } from '@mui/material'
import Image from 'next/image'
import React, { use } from 'react'

export default function BaseComponent(props: any) {
  var checks = props.checks || ["Nothing"]
  return (
    <Grid md={4} item>
      <Card>
        <CardHeader title={props.name}></CardHeader>
        {checks.map((c: any) => <CheckStatus key={c} text={c}/> )}
      </Card>
    </Grid>
  )
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
  const okd=props.okd || ""

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
          <ElementLinkTruenasScale ip={ipAddress} enabled={enableTruenas} />
        
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
    enabled ? <Link href={"http://" + ip + "9090"} target='_blank'><Image src={"/icons/cockpit.png"} alt="Open Cockpit Console" width={50} height={50} ></Image></Link>
      : <></>
  )
}
export function ElementLinkTruenasScale({ ip, enabled }: { ip: string, enabled: boolean }) {
  return (
    enabled ? <Link href={"http://" + ip + "/ui"} target='_blank'><Image src={"/icons/logo-TrueNAS-Scale-compressor.webp"} alt="Open Cockpit Console" width={50} height={50} ></Image></Link>
      : <></>
  )
}

