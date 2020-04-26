---
title: ClientSettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[ClientSettings](#constructor-0)**() |
| **[ClientSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ClientSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[ClientSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "loadedTimeout" >}} | float |
| {{< prop "outgoingRate" >}} | int |
| {{< prop "loadingTimeout" >}} | float |
| {{< prop "incomingFrequency" >}} | float |
| {{< prop "incomingRate" >}} | int |
| {{< prop "duplicationChance" >}} | float |
| {{< prop "team" >}} | int |
| {{< prop "maxDropDuration" >}} | float |
| {{< prop "reorderingChance" >}} | float |
| {{< prop "dropSpikeChance" >}} | float |
| {{< prop "minDropDuration" >}} | float |
| {{< prop "maxIncomingLatency" >}} | float |
| {{< prop "packetDrops" >}} | float |
| {{< prop "maxLatency" >}} | float |
| {{< prop "minIncomingLatency" >}} | float |
| {{< prop "corruptionChance" >}} | float |
| {{< prop "serverIp" >}} | string |
| {{< prop "screenshotSuffix" >}} | string |
| {{< prop "spawnPointIndex" >}} | int |
| {{< prop "minLatency" >}} | float |
| {{< prop "screenshotFilename" >}} | string |
| {{< prop "ingameTimeout" >}} | float |
| {{< prop "aimScale" >}} | float |
| {{< prop "secondaryServerIp" >}} | string |
| {{< prop "skipFastLevelLoad" >}} | bool |
| {{< prop "screenshotToFile" >}} | bool |
| {{< prop "ignoreClientFireRateMultiplier" >}} | bool |
| {{< prop "inputEnable" >}} | bool |
| {{< prop "loadMenu" >}} | bool |
| {{< prop "pauseGameOnStartUp" >}} | bool |
| {{< prop "debugMenuOnLThumb" >}} | bool |
| {{< prop "invertPitch" >}} | bool |
| {{< prop "occludersEnabled" >}} | bool |
| {{< prop "isPresenceEnabled" >}} | bool |
| {{< prop "invertFreeCamera" >}} | bool |
| {{< prop "scheme2FlipY" >}} | bool |
| {{< prop "invertYaw" >}} | bool |
| {{< prop "lipSyncEnabled" >}} | bool |
| {{< prop "isInternetSimulationEnabled" >}} | bool |
| {{< prop "onDamageSpottingEnabled" >}} | bool |
| {{< prop "emittersEnabled" >}} | bool |
| {{< prop "padRumbleEnabled" >}} | bool |
| {{< prop "overgrowthEnabled" >}} | bool |
| {{< prop "effectsEnabled" >}} | bool |
| {{< prop "terrainEnabled" >}} | bool |
| {{< prop "waterPhysicsEnabled" >}} | bool |
| {{< prop "vegetationEnabled" >}} | bool |
| {{< prop "worldRenderEnabled" >}} | bool |
| {{< prop "renderTags" >}} | bool |
| {{< prop "debrisClusterEnabled" >}} | bool |
| {{< prop "havokVisualDebugger" >}} | bool |
| {{< prop "havokVDBShowsEffectsWorld" >}} | bool |
| {{< prop "havokCaptureToFile" >}} | bool |
| {{< prop "useMouseAndKeyboardSystem" >}} | bool |
| {{< prop "useGlobalGamePadInput" >}} | bool |
| {{< prop "threadedLoadingEnable" >}} | bool |
| {{< prop "showBuildId" >}} | bool |
| {{< prop "extractPersistenceInformation" >}} | bool |
| {{< prop "enableRestTool" >}} | bool |
| {{< prop "localVehicleSimulationEnabled" >}} | bool |
| {{< prop "asyncClientBulletEntity" >}} | bool |
| {{< prop "autoUnspawnDynamicObjects" >}} | bool |
| {{< prop "vsyncEnable" >}} | bool |
| {{< prop "visualFrameInterpolation" >}} | bool |
| {{< prop "invertPadPcRightStick" >}} | bool |
| {{< prop "scheme0FlipY" >}} | bool |
| {{< prop "isSpectator" >}} | bool |
| {{< prop "scheme1FlipY" >}} | bool |
| {{< prop "quitGameOnServerDisconnect" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ClientSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ClientSettings {#constructor-0}
> **ClientSettings**()

Creates a new [ClientSettings](/vext/ref/fb/clientsettings) frostbite instance.

### ClientSettings {#constructor-1}
> **ClientSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ClientSettings](/vext/ref/fb/clientsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ClientSettings {#constructor-2}
> **ClientSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [ClientSettings](/vext/ref/fb/clientsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [ClientSettings](/vext/ref/fb/clientsettings). |

### ClientSettings {#constructor-3}
> **ClientSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClientSettings](/vext/ref/fb/clientsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ClientSettings](/vext/ref/fb/clientsettings). |

## Properties
### {{% prop-heading "loadedTimeout" %}}
> **float**

### {{% prop-heading "outgoingRate" %}}
> **int**

### {{% prop-heading "loadingTimeout" %}}
> **float**

### {{% prop-heading "incomingFrequency" %}}
> **float**

### {{% prop-heading "incomingRate" %}}
> **int**

### {{% prop-heading "duplicationChance" %}}
> **float**

### {{% prop-heading "team" %}}
> **int**

### {{% prop-heading "maxDropDuration" %}}
> **float**

### {{% prop-heading "reorderingChance" %}}
> **float**

### {{% prop-heading "dropSpikeChance" %}}
> **float**

### {{% prop-heading "minDropDuration" %}}
> **float**

### {{% prop-heading "maxIncomingLatency" %}}
> **float**

### {{% prop-heading "packetDrops" %}}
> **float**

### {{% prop-heading "maxLatency" %}}
> **float**

### {{% prop-heading "minIncomingLatency" %}}
> **float**

### {{% prop-heading "corruptionChance" %}}
> **float**

### {{% prop-heading "serverIp" %}}
> **string**

### {{% prop-heading "screenshotSuffix" %}}
> **string**

### {{% prop-heading "spawnPointIndex" %}}
> **int**

### {{% prop-heading "minLatency" %}}
> **float**

### {{% prop-heading "screenshotFilename" %}}
> **string**

### {{% prop-heading "ingameTimeout" %}}
> **float**

### {{% prop-heading "aimScale" %}}
> **float**

### {{% prop-heading "secondaryServerIp" %}}
> **string**

### {{% prop-heading "skipFastLevelLoad" %}}
> **bool**

### {{% prop-heading "screenshotToFile" %}}
> **bool**

### {{% prop-heading "ignoreClientFireRateMultiplier" %}}
> **bool**

### {{% prop-heading "inputEnable" %}}
> **bool**

### {{% prop-heading "loadMenu" %}}
> **bool**

### {{% prop-heading "pauseGameOnStartUp" %}}
> **bool**

### {{% prop-heading "debugMenuOnLThumb" %}}
> **bool**

### {{% prop-heading "invertPitch" %}}
> **bool**

### {{% prop-heading "occludersEnabled" %}}
> **bool**

### {{% prop-heading "isPresenceEnabled" %}}
> **bool**

### {{% prop-heading "invertFreeCamera" %}}
> **bool**

### {{% prop-heading "scheme2FlipY" %}}
> **bool**

### {{% prop-heading "invertYaw" %}}
> **bool**

### {{% prop-heading "lipSyncEnabled" %}}
> **bool**

### {{% prop-heading "isInternetSimulationEnabled" %}}
> **bool**

### {{% prop-heading "onDamageSpottingEnabled" %}}
> **bool**

### {{% prop-heading "emittersEnabled" %}}
> **bool**

### {{% prop-heading "padRumbleEnabled" %}}
> **bool**

### {{% prop-heading "overgrowthEnabled" %}}
> **bool**

### {{% prop-heading "effectsEnabled" %}}
> **bool**

### {{% prop-heading "terrainEnabled" %}}
> **bool**

### {{% prop-heading "waterPhysicsEnabled" %}}
> **bool**

### {{% prop-heading "vegetationEnabled" %}}
> **bool**

### {{% prop-heading "worldRenderEnabled" %}}
> **bool**

### {{% prop-heading "renderTags" %}}
> **bool**

### {{% prop-heading "debrisClusterEnabled" %}}
> **bool**

### {{% prop-heading "havokVisualDebugger" %}}
> **bool**

### {{% prop-heading "havokVDBShowsEffectsWorld" %}}
> **bool**

### {{% prop-heading "havokCaptureToFile" %}}
> **bool**

### {{% prop-heading "useMouseAndKeyboardSystem" %}}
> **bool**

### {{% prop-heading "useGlobalGamePadInput" %}}
> **bool**

### {{% prop-heading "threadedLoadingEnable" %}}
> **bool**

### {{% prop-heading "showBuildId" %}}
> **bool**

### {{% prop-heading "extractPersistenceInformation" %}}
> **bool**

### {{% prop-heading "enableRestTool" %}}
> **bool**

### {{% prop-heading "localVehicleSimulationEnabled" %}}
> **bool**

### {{% prop-heading "asyncClientBulletEntity" %}}
> **bool**

### {{% prop-heading "autoUnspawnDynamicObjects" %}}
> **bool**

### {{% prop-heading "vsyncEnable" %}}
> **bool**

### {{% prop-heading "visualFrameInterpolation" %}}
> **bool**

### {{% prop-heading "invertPadPcRightStick" %}}
> **bool**

### {{% prop-heading "scheme0FlipY" %}}
> **bool**

### {{% prop-heading "isSpectator" %}}
> **bool**

### {{% prop-heading "scheme1FlipY" %}}
> **bool**

### {{% prop-heading "quitGameOnServerDisconnect" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ClientSettings](/vext/ref/fb/clientsettings) type.

