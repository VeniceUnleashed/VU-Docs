---
title: DriverSettings
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[DriverSettings](#constructor-0)**() |
| **[DriverSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DriverSettings](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[DriverSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minRadius" >}} | float |
| {{< prop "radiusGrowthSpeed" >}} | float |
| {{< prop "stoppingDeceleration" >}} | float |
| {{< prop "steeringSensitivity" >}} | float |
| {{< prop "maxBrakeOutput" >}} | float |
| {{< prop "maxDec" >}} | float |
| {{< prop "lookAheadTime" >}} | float |
| {{< prop "angleDiffForNoSlowdown" >}} | float |
| {{< prop "angleDiffForFullSlowdown" >}} | float |
| {{< prop "velocityAtFullSlowdown" >}} | float |
| {{< prop "velDiffAtMinAcc" >}} | float |
| {{< prop "velDiffAtMaxAcc" >}} | float |
| {{< prop "maxYawToApplySprint" >}} | float |
| {{< prop "minAcc" >}} | float |
| {{< prop "maxAcc" >}} | float |
| {{< prop "velDiffAtMinDec" >}} | float |
| {{< prop "velDiffAtMaxDec" >}} | float |
| {{< prop "accDiffAtMinThrottleVelocityDecelerating" >}} | float |
| {{< prop "minDec" >}} | float |
| {{< prop "minThrottleVelocityDecelerating" >}} | float |
| {{< prop "accDiffAtMinThrottleVelocityAccelerating" >}} | float |
| {{< prop "accDiffAtMaxThrottleVelocityAccelerating" >}} | float |
| {{< prop "maxThrottleVelocityDecelerating" >}} | float |
| {{< prop "minThrottleVelocityAccelerating" >}} | float |
| {{< prop "maxThrottleVelocityAccelerating" >}} | float |
| {{< prop "maxPTerm" >}} | float |
| {{< prop "accDiffAtMaxThrottleVelocityDecelerating" >}} | float |
| {{< prop "p" >}} | float |
| {{< prop "i" >}} | float |
| {{< prop "maxError" >}} | float |
| {{< prop "maxITerm" >}} | float |
| {{< prop "maxSumError" >}} | float |
| {{< prop "d" >}} | float |
| {{< prop "useSquareVelDiffCurveDec" >}} | bool |
| {{< prop "useSquareAccDiffCurveDec" >}} | bool |
| {{< prop "squareBrakeOutput" >}} | bool |
| {{< prop "useSquareVelDiffCurveAcc" >}} | bool |
| {{< prop "usePIDRegulator" >}} | bool |
| {{< prop "useSquareAccDiffCurveAcc" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DriverSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DriverSettings {#constructor-0}
> **DriverSettings**()

Creates a new [DriverSettings](/vext/ref/fb/driversettings) frostbite instance.

### DriverSettings {#constructor-1}
> **DriverSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DriverSettings](/vext/ref/fb/driversettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DriverSettings {#constructor-2}
> **DriverSettings**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [DriverSettings](/vext/ref/fb/driversettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [DriverSettings](/vext/ref/fb/driversettings). |

### DriverSettings {#constructor-3}
> **DriverSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DriverSettings](/vext/ref/fb/driversettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DriverSettings](/vext/ref/fb/driversettings). |

## Properties
### {{% prop-heading "minRadius" %}}
> **float**

### {{% prop-heading "radiusGrowthSpeed" %}}
> **float**

### {{% prop-heading "stoppingDeceleration" %}}
> **float**

### {{% prop-heading "steeringSensitivity" %}}
> **float**

### {{% prop-heading "maxBrakeOutput" %}}
> **float**

### {{% prop-heading "maxDec" %}}
> **float**

### {{% prop-heading "lookAheadTime" %}}
> **float**

### {{% prop-heading "angleDiffForNoSlowdown" %}}
> **float**

### {{% prop-heading "angleDiffForFullSlowdown" %}}
> **float**

### {{% prop-heading "velocityAtFullSlowdown" %}}
> **float**

### {{% prop-heading "velDiffAtMinAcc" %}}
> **float**

### {{% prop-heading "velDiffAtMaxAcc" %}}
> **float**

### {{% prop-heading "maxYawToApplySprint" %}}
> **float**

### {{% prop-heading "minAcc" %}}
> **float**

### {{% prop-heading "maxAcc" %}}
> **float**

### {{% prop-heading "velDiffAtMinDec" %}}
> **float**

### {{% prop-heading "velDiffAtMaxDec" %}}
> **float**

### {{% prop-heading "accDiffAtMinThrottleVelocityDecelerating" %}}
> **float**

### {{% prop-heading "minDec" %}}
> **float**

### {{% prop-heading "minThrottleVelocityDecelerating" %}}
> **float**

### {{% prop-heading "accDiffAtMinThrottleVelocityAccelerating" %}}
> **float**

### {{% prop-heading "accDiffAtMaxThrottleVelocityAccelerating" %}}
> **float**

### {{% prop-heading "maxThrottleVelocityDecelerating" %}}
> **float**

### {{% prop-heading "minThrottleVelocityAccelerating" %}}
> **float**

### {{% prop-heading "maxThrottleVelocityAccelerating" %}}
> **float**

### {{% prop-heading "maxPTerm" %}}
> **float**

### {{% prop-heading "accDiffAtMaxThrottleVelocityDecelerating" %}}
> **float**

### {{% prop-heading "p" %}}
> **float**

### {{% prop-heading "i" %}}
> **float**

### {{% prop-heading "maxError" %}}
> **float**

### {{% prop-heading "maxITerm" %}}
> **float**

### {{% prop-heading "maxSumError" %}}
> **float**

### {{% prop-heading "d" %}}
> **float**

### {{% prop-heading "useSquareVelDiffCurveDec" %}}
> **bool**

### {{% prop-heading "useSquareAccDiffCurveDec" %}}
> **bool**

### {{% prop-heading "squareBrakeOutput" %}}
> **bool**

### {{% prop-heading "useSquareVelDiffCurveAcc" %}}
> **bool**

### {{% prop-heading "usePIDRegulator" %}}
> **bool**

### {{% prop-heading "useSquareAccDiffCurveAcc" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DriverSettings](/vext/ref/fb/driversettings) type.

