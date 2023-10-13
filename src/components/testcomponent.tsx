"use client"

import { CheckUrlViaBackend, useHealthCheck } from "@/util/checks"
import { Button, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"

export function Tailscale() {
  const result = useHealthCheck("pikvm-mini reachable", { url: "http://pikvm-mini/login", expected_status: 301 }, CheckUrlViaBackend)


  return <Grid item xs={1}>
    <Card>
      <CardHeader title="Pi KVM (Tailscale)" />
      <CardContent>
        <Typography>Connected: {result.state}</Typography>
        <Typography>Message: {result.message}</Typography>
        
      </CardContent>
      <CardContent>
        <Button variant="outlined" href={""} target="_blank">Connect</Button>
      </CardContent>
    </Card>
  </Grid>
}
