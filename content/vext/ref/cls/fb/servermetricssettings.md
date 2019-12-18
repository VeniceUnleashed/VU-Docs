---
title: ServerMetricsSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ServerMetricsSettings()                                                          | Create a new instance of this container type.                                                                                     |
| ServerMetricsSettings(ServerMetricsSettings other)                               | Create a reference copy of an instance of the same type.                                                                          |
| ServerMetricsSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ServerMetricsSettings](ServerMetricsSettings). |

## Properties

| Name                           | Type   | Description |
| ------------------------------ | ------ | ----------- |
| reportName                     | string |             |
| enabled                        | bool   |             |
| dbxReportEnabled               | bool   |             |
| tickTelemetryEnabled           | bool   |             |
| developmentTelemetryEnabled    | bool   |             |
| performanceTelemetryEnabled    | bool   |             |
| juiceTelemetryEnabled          | bool   |             |
| performanceProfileStateEnabled | bool   |             |
| transactionTelemetryEnabled    | bool   |             |
| compressTransactions           | bool   |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [ServerMetricsSettings](ServerMetricsSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ServerMetricsSettings](ServerMetricsSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
