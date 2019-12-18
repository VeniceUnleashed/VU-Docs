---
title: ClientSettings (Frostbite Container)
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ClientSettings()                                                          | Create a new instance of this container type.                                                                       |
| ClientSettings(ClientSettings other)                                      | Create a reference copy of an instance of the same type.                                                            |
| ClientSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [ClientSettings](ClientSettings).                    |
| ClientSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ClientSettings](ClientSettings). |

## Properties

| Name                           | Type   | Description |
| ------------------------------ | ------ | ----------- |
| loadedTimeout                  | number |             |
| outgoingRate                   | number |             |
| loadingTimeout                 | number |             |
| incomingFrequency              | number |             |
| incomingRate                   | number |             |
| duplicationChance              | number |             |
| team                           | number |             |
| maxDropDuration                | number |             |
| reorderingChance               | number |             |
| dropSpikeChance                | number |             |
| minDropDuration                | number |             |
| maxIncomingLatency             | number |             |
| packetDrops                    | number |             |
| maxLatency                     | number |             |
| minIncomingLatency             | number |             |
| corruptionChance               | number |             |
| serverIp                       | string |             |
| screenshotSuffix               | string |             |
| spawnPointIndex                | number |             |
| minLatency                     | number |             |
| screenshotFilename             | string |             |
| ingameTimeout                  | number |             |
| aimScale                       | number |             |
| secondaryServerIp              | string |             |
| skipFastLevelLoad              | bool   |             |
| screenshotToFile               | bool   |             |
| ignoreClientFireRateMultiplier | bool   |             |
| inputEnable                    | bool   |             |
| loadMenu                       | bool   |             |
| pauseGameOnStartUp             | bool   |             |
| debugMenuOnLThumb              | bool   |             |
| invertPitch                    | bool   |             |
| occludersEnabled               | bool   |             |
| isPresenceEnabled              | bool   |             |
| invertFreeCamera               | bool   |             |
| scheme2FlipY                   | bool   |             |
| invertYaw                      | bool   |             |
| lipSyncEnabled                 | bool   |             |
| isInternetSimulationEnabled    | bool   |             |
| onDamageSpottingEnabled        | bool   |             |
| emittersEnabled                | bool   |             |
| padRumbleEnabled               | bool   |             |
| overgrowthEnabled              | bool   |             |
| effectsEnabled                 | bool   |             |
| terrainEnabled                 | bool   |             |
| waterPhysicsEnabled            | bool   |             |
| vegetationEnabled              | bool   |             |
| worldRenderEnabled             | bool   |             |
| renderTags                     | bool   |             |
| debrisClusterEnabled           | bool   |             |
| havokVisualDebugger            | bool   |             |
| havokVDBShowsEffectsWorld      | bool   |             |
| havokCaptureToFile             | bool   |             |
| useMouseAndKeyboardSystem      | bool   |             |
| useGlobalGamePadInput          | bool   |             |
| threadedLoadingEnable          | bool   |             |
| showBuildId                    | bool   |             |
| extractPersistenceInformation  | bool   |             |
| enableRestTool                 | bool   |             |
| localVehicleSimulationEnabled  | bool   |             |
| asyncClientBulletEntity        | bool   |             |
| autoUnspawnDynamicObjects      | bool   |             |
| vsyncEnable                    | bool   |             |
| visualFrameInterpolation       | bool   |             |
| invertPadPcRightStick          | bool   |             |
| scheme0FlipY                   | bool   |             |
| isSpectator                    | bool   |             |
| scheme1FlipY                   | bool   |             |
| quitGameOnServerDisconnect     | bool   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [ClientSettings](ClientSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ClientSettings](ClientSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
