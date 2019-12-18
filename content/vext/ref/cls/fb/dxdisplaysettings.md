---
title: DxDisplaySettings (Frostbite Container)
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DxDisplaySettings()                                                          | Create a new instance of this container type.                                                                             |
| DxDisplaySettings(DxDisplaySettings other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| DxDisplaySettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [DxDisplaySettings](DxDisplaySettings).                    |
| DxDisplaySettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DxDisplaySettings](DxDisplaySettings). |

## Properties

| Name                              | Type       | Description |
| --------------------------------- | ---------- | ----------- |
| fullscreenWidth                   | number     |             |
| fullscreenHeight                  | number     |             |
| amdMinDriverVersion               | string     |             |
| nvidiaMinDriverVersion            | number     |             |
| fullscreenRefreshRate             | number     |             |
| stereoSeparationScale             | number     |             |
| stereoDepth                       | number     |             |
| fullscreenOutputIndex             | number     |             |
| debugBreakIgnoredIDs              | number\[\] |             |
| stereoConvergenceScale            | number     |             |
| stereoSoldierZoomConvergenceScale | number     |             |
| forceRenderAheadLimit             | number     |             |
| presentInterval                   | number     |             |
| debugBreakOnWarningEnable         | bool       |             |
| debugInfoEnable                   | bool       |             |
| fullscreen                        | bool       |             |
| debugBreakOnErrorEnable           | bool       |             |
| createMinimalWindow               | bool       |             |
| driverInternalThreadingEnable     | bool       |             |
| debugBreakOnInfoEnable            | bool       |             |
| fullscreenModeEnable              | bool       |             |
| vSyncEnable                       | bool       |             |
| tripleBufferingEnable             | bool       |             |
| dx10PlusEnable                    | bool       |             |
| nvApiEnable                       | bool       |             |
| nvPerfHudEnable                   | bool       |             |
| stereoEnable                      | bool       |             |
| dx11Enable                        | bool       |             |
| dx10Dot0Enable                    | bool       |             |
| refDriverEnable                   | bool       |             |
| dx10Dot1Enable                    | bool       |             |
| minDriverRequired                 | bool       |             |
| warpDriverEnable                  | bool       |             |
| nullDriverEnable                  | bool       |             |
| multiGpuValidationEnable          | bool       |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [DxDisplaySettings](DxDisplaySettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DxDisplaySettings](DxDisplaySettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
