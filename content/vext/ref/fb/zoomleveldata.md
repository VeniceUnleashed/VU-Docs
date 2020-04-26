---
title: ZoomLevelData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[ZoomLevelData](#constructor-0)**() |
| **[ZoomLevelData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ZoomLevelData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "fieldOfView" >}} | float |
| {{< prop "dispersionMultiplier" >}} | float |
| {{< prop "lookSpeedMultiplier" >}} | float |
| {{< prop "sprintLookSpeedMultiplier" >}} | float |
| {{< prop "moveSpeedMultiplier" >}} | float |
| {{< prop "swayPitchMultiplier" >}} | float |
| {{< prop "swayYawMultiplier" >}} | float |
| {{< prop "supportedSwayPitchMultiplier" >}} | float |
| {{< prop "supportedSwayYawMultiplier" >}} | float |
| {{< prop "timePitchMultiplier" >}} | float |
| {{< prop "timeYawMultiplier" >}} | float |
| {{< prop "recoilMultiplier" >}} | float |
| {{< prop "fadeToBlackDuration" >}} | float |
| {{< prop "recoilFovMultiplier" >}} | float |
| {{< prop "cameraImpulseMultiplier" >}} | float |
| {{< prop "onActivateEventType" >}} | [ZoomLevelActivateEventType](/vext/ref/fb/zoomlevelactivateeventtype) |
| {{< prop "startFadeToBlackAtTime" >}} | float |
| {{< prop "fadeFromBlackDuration" >}} | float |
| {{< prop "startFadeFromBlackAtTime" >}} | float |
| {{< prop "screenExposureAreaScale" >}} | float |
| {{< prop "fadeToBlackInZoomTransition" >}} | bool |
| {{< prop "useFovSpecialisation" >}} | bool |
| {{< prop "allowFieldOfViewScaling" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ZoomLevelData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ZoomLevelData {#constructor-0}
> **ZoomLevelData**()

Creates a new [ZoomLevelData](/vext/ref/fb/zoomleveldata) frostbite instance.

### ZoomLevelData {#constructor-1}
> **ZoomLevelData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ZoomLevelData](/vext/ref/fb/zoomleveldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ZoomLevelData {#constructor-2}
> **ZoomLevelData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ZoomLevelData](/vext/ref/fb/zoomleveldata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ZoomLevelData](/vext/ref/fb/zoomleveldata). |

## Properties
### {{% prop-heading "fieldOfView" %}}
> **float**

### {{% prop-heading "dispersionMultiplier" %}}
> **float**

### {{% prop-heading "lookSpeedMultiplier" %}}
> **float**

### {{% prop-heading "sprintLookSpeedMultiplier" %}}
> **float**

### {{% prop-heading "moveSpeedMultiplier" %}}
> **float**

### {{% prop-heading "swayPitchMultiplier" %}}
> **float**

### {{% prop-heading "swayYawMultiplier" %}}
> **float**

### {{% prop-heading "supportedSwayPitchMultiplier" %}}
> **float**

### {{% prop-heading "supportedSwayYawMultiplier" %}}
> **float**

### {{% prop-heading "timePitchMultiplier" %}}
> **float**

### {{% prop-heading "timeYawMultiplier" %}}
> **float**

### {{% prop-heading "recoilMultiplier" %}}
> **float**

### {{% prop-heading "fadeToBlackDuration" %}}
> **float**

### {{% prop-heading "recoilFovMultiplier" %}}
> **float**

### {{% prop-heading "cameraImpulseMultiplier" %}}
> **float**

### {{% prop-heading "onActivateEventType" %}}
> **[ZoomLevelActivateEventType](/vext/ref/fb/zoomlevelactivateeventtype)**

### {{% prop-heading "startFadeToBlackAtTime" %}}
> **float**

### {{% prop-heading "fadeFromBlackDuration" %}}
> **float**

### {{% prop-heading "startFadeFromBlackAtTime" %}}
> **float**

### {{% prop-heading "screenExposureAreaScale" %}}
> **float**

### {{% prop-heading "fadeToBlackInZoomTransition" %}}
> **bool**

### {{% prop-heading "useFovSpecialisation" %}}
> **bool**

### {{% prop-heading "allowFieldOfViewScaling" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ZoomLevelData](/vext/ref/fb/zoomleveldata) type.

