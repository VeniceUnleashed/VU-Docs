---
title: GearboxConfigData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[GearboxConfigData](#constructor-0)**() |
| **[GearboxConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GearboxConfigData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "forwardGearRatios" >}} | float[] |
| {{< prop "forwardGearSpeeds" >}} | float[] |
| {{< prop "reverseGearRatios" >}} | float[] |
| {{< prop "reverseGearSpeeds" >}} | float[] |
| {{< prop "gearboxType" >}} | int |
| {{< prop "gearboxMode" >}} | int |
| {{< prop "gearChangeTime" >}} | float |
| {{< prop "gearDownSpeedFactor" >}} | float |
| {{< prop "oppositeDirGearChangeMaxSpeed" >}} | float |
| {{< prop "oppositeDirGearChangeTime" >}} | float |
| {{< prop "clutchSpeedFactor" >}} | float |
| {{< prop "transmissionEfficiency" >}} | float |
| {{< prop "backwardThrottleLimit" >}} | float |
| {{< prop "useClassicGearBoxAutoClutch" >}} | bool |
| {{< prop "useNeutralGear" >}} | bool |
| {{< prop "limitBackwardThrottle" >}} | bool |
| {{< prop "useAutoClutch" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GearboxConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GearboxConfigData {#constructor-0}

> **GearboxConfigData**()

Creates a new [GearboxConfigData](/vext/ref/fb/gearboxconfigdata) frostbite instance.

### GearboxConfigData {#constructor-1}

> **GearboxConfigData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GearboxConfigData](/vext/ref/fb/gearboxconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GearboxConfigData {#constructor-2}

> **GearboxConfigData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GearboxConfigData](/vext/ref/fb/gearboxconfigdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GearboxConfigData](/vext/ref/fb/gearboxconfigdata). |

## Properties

### {{% prop-heading "forwardGearRatios" %}}

> **float**[]

### {{% prop-heading "forwardGearSpeeds" %}}

> **float**[]

### {{% prop-heading "reverseGearRatios" %}}

> **float**[]

### {{% prop-heading "reverseGearSpeeds" %}}

> **float**[]

### {{% prop-heading "gearboxType" %}}

> **int**

### {{% prop-heading "gearboxMode" %}}

> **int**

### {{% prop-heading "gearChangeTime" %}}

> **float**

### {{% prop-heading "gearDownSpeedFactor" %}}

> **float**

### {{% prop-heading "oppositeDirGearChangeMaxSpeed" %}}

> **float**

### {{% prop-heading "oppositeDirGearChangeTime" %}}

> **float**

### {{% prop-heading "clutchSpeedFactor" %}}

> **float**

### {{% prop-heading "transmissionEfficiency" %}}

> **float**

### {{% prop-heading "backwardThrottleLimit" %}}

> **float**

### {{% prop-heading "useClassicGearBoxAutoClutch" %}}

> **bool**

### {{% prop-heading "useNeutralGear" %}}

> **bool**

### {{% prop-heading "limitBackwardThrottle" %}}

> **bool**

### {{% prop-heading "useAutoClutch" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GearboxConfigData](/vext/ref/fb/gearboxconfigdata) type.

