---
title: AirMissileJammingData
---

## Summary

### Constructors

|  |
| --- |
| **[AirMissileJammingData](#constructor-0)**() |
| **[AirMissileJammingData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minTurnSpeed" >}} | float |
| {{< prop "maxRadius" >}} | float |
| {{< prop "minRadius" >}} | float |
| {{< prop "theta" >}} | float |
| {{< prop "phi" >}} | float |
| {{< prop "updateJammingPositionTime" >}} | float |
| {{< prop "maxTurnSpeed" >}} | float |
| {{< prop "quietModeProbability" >}} | float |
| {{< prop "quietModeTime" >}} | float |
| {{< prop "jammingTime" >}} | float |
| {{< prop "turnCalculationTime" >}} | float |
| {{< prop "enableAirMissileJamming" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AirMissileJammingData](/vext/ref/fb/airmissilejammingdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AirMissileJammingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AirMissileJammingData {#constructor-0}

> **AirMissileJammingData**()

Creates a new [AirMissileJammingData](/vext/ref/fb/airmissilejammingdata) frostbite instance.

### AirMissileJammingData {#constructor-1}

> **AirMissileJammingData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AirMissileJammingData](/vext/ref/fb/airmissilejammingdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "minTurnSpeed" %}}

> **float**

### {{% prop-heading "maxRadius" %}}

> **float**

### {{% prop-heading "minRadius" %}}

> **float**

### {{% prop-heading "theta" %}}

> **float**

### {{% prop-heading "phi" %}}

> **float**

### {{% prop-heading "updateJammingPositionTime" %}}

> **float**

### {{% prop-heading "maxTurnSpeed" %}}

> **float**

### {{% prop-heading "quietModeProbability" %}}

> **float**

### {{% prop-heading "quietModeTime" %}}

> **float**

### {{% prop-heading "jammingTime" %}}

> **float**

### {{% prop-heading "turnCalculationTime" %}}

> **float**

### {{% prop-heading "enableAirMissileJamming" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [AirMissileJammingData](/vext/ref/fb/airmissilejammingdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AirMissileJammingData](/vext/ref/fb/airmissilejammingdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AirMissileJammingData](/vext/ref/fb/airmissilejammingdata) type.

