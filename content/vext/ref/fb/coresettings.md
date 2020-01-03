---
title: CoreSettings
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| CoreSettings()                   | Create a new instance of this structure type.            |
| CoreSettings(CoreSettings other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                  | Type                               | Description |
| --------------------- | ---------------------------------- | ----------- |
| randomTickSeed        | number                             |             |
| availableLanguages    | string                             |             |
| randomSessionId       | number                             |             |
| randomTimeSeed        | number                             |             |
| hardwareGpuBias       | number                             |             |
| hardwareProfile       | [HardwareProfile](/vext/ref/fb/hardwareprofile/) |             |
| jobProcessorCount     | number                             |             |
| maxJobThreadCount     | number                             |             |
| host                  | string                             |             |
| hostUser              | string                             |             |
| hostUserDomain        | string                             |             |
| initSeed              | string                             |             |
| logLevel              | [CoreLogLevel](/vext/ref/fb/coreloglevel/)       |             |
| hardwareCpuBias       | number                             |             |
| gameConfigurationName | string                             |             |
| profileDirectoryName  | string                             |             |
| displayAsserts        | bool                               |             |
| liveEditingEnable     | bool                               |             |
| useStorageServer      | bool                               |             |
| useDiskCaching        | bool                               |             |
| crashOnFatalErrors    | bool                               |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [CoreSettings](/vext/ref/fb/coresettings/) | [Clone](#clone) |            |

### Clone

> [CoreSettings](/vext/ref/fb/coresettings/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
