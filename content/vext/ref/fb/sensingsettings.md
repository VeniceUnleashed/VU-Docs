---
title: SensingSettings
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[SensingSettings](#constructor-0)**() |
| **[SensingSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SensingSettings](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SensingSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sensingTimeSpan" >}} | float |
| {{< prop "attackerTrackTime" >}} | float |
| {{< prop "lineOfSightTestTime" >}} | float |
| {{< prop "maxRays" >}} | int |
| {{< prop "characterVisionBoxSettings" >}} | [VisionBoxSettings](/vext/ref/fb/visionboxsettings) |
| {{< prop "vehicleVisionBoxSettings" >}} | [VisionBoxSettings](/vext/ref/fb/visionboxsettings) |
| {{< prop "closeFireImpactDistance" >}} | float |
| {{< prop "closeExplosiveImpactDistance" >}} | float |
| {{< prop "closeTrajectoryDistance" >}} | float |
| {{< prop "impactSenseDistance" >}} | float |
| {{< prop "maxVolume" >}} | float |
| {{< prop "maxSize" >}} | float |
| {{< prop "maxSpeed" >}} | float |
| {{< prop "volumeModifier" >}} | float |
| {{< prop "movementModifier" >}} | float |
| {{< prop "luckModifier" >}} | float |
| {{< prop "backgroundLoudnessFactor" >}} | float |
| {{< prop "motionSizeFactor" >}} | float |
| {{< prop "motionSpeedFactor" >}} | float |
| {{< prop "motionPeripheralityFactor" >}} | float |
| {{< prop "motionDistanceFactor" >}} | float |
| {{< prop "smokeSphereRadius" >}} | float |
| {{< prop "smokeSphereDuration" >}} | float |
| {{< prop "spawnOutOfLOSRaycastHeight" >}} | float |
| {{< prop "spawnOutOfLOSTraceDistance" >}} | float |
| {{< prop "spawnOutOfLOSRaycastDistance" >}} | float |
| {{< prop "spawnOutOfLOSRadius" >}} | float |
| {{< prop "defaultTemplate" >}} | [SensingTemplateData](/vext/ref/fb/sensingtemplatedata) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SensingSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SensingSettings {#constructor-0}
> **SensingSettings**()

Creates a new [SensingSettings](/vext/ref/fb/sensingsettings) frostbite instance.

### SensingSettings {#constructor-1}
> **SensingSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SensingSettings](/vext/ref/fb/sensingsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SensingSettings {#constructor-2}
> **SensingSettings**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SensingSettings](/vext/ref/fb/sensingsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SensingSettings](/vext/ref/fb/sensingsettings). |

### SensingSettings {#constructor-3}
> **SensingSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SensingSettings](/vext/ref/fb/sensingsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SensingSettings](/vext/ref/fb/sensingsettings). |

## Properties
### {{% prop-heading "sensingTimeSpan" %}}
> **float**

### {{% prop-heading "attackerTrackTime" %}}
> **float**

### {{% prop-heading "lineOfSightTestTime" %}}
> **float**

### {{% prop-heading "maxRays" %}}
> **int**

### {{% prop-heading "characterVisionBoxSettings" %}}
> **[VisionBoxSettings](/vext/ref/fb/visionboxsettings)**

### {{% prop-heading "vehicleVisionBoxSettings" %}}
> **[VisionBoxSettings](/vext/ref/fb/visionboxsettings)**

### {{% prop-heading "closeFireImpactDistance" %}}
> **float**

### {{% prop-heading "closeExplosiveImpactDistance" %}}
> **float**

### {{% prop-heading "closeTrajectoryDistance" %}}
> **float**

### {{% prop-heading "impactSenseDistance" %}}
> **float**

### {{% prop-heading "maxVolume" %}}
> **float**

### {{% prop-heading "maxSize" %}}
> **float**

### {{% prop-heading "maxSpeed" %}}
> **float**

### {{% prop-heading "volumeModifier" %}}
> **float**

### {{% prop-heading "movementModifier" %}}
> **float**

### {{% prop-heading "luckModifier" %}}
> **float**

### {{% prop-heading "backgroundLoudnessFactor" %}}
> **float**

### {{% prop-heading "motionSizeFactor" %}}
> **float**

### {{% prop-heading "motionSpeedFactor" %}}
> **float**

### {{% prop-heading "motionPeripheralityFactor" %}}
> **float**

### {{% prop-heading "motionDistanceFactor" %}}
> **float**

### {{% prop-heading "smokeSphereRadius" %}}
> **float**

### {{% prop-heading "smokeSphereDuration" %}}
> **float**

### {{% prop-heading "spawnOutOfLOSRaycastHeight" %}}
> **float**

### {{% prop-heading "spawnOutOfLOSTraceDistance" %}}
> **float**

### {{% prop-heading "spawnOutOfLOSRaycastDistance" %}}
> **float**

### {{% prop-heading "spawnOutOfLOSRadius" %}}
> **float**

### {{% prop-heading "defaultTemplate" %}}
> **[SensingTemplateData](/vext/ref/fb/sensingtemplatedata)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SensingSettings](/vext/ref/fb/sensingsettings) type.

