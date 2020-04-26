---
title: HoldAndReleaseData
---

## Summary

### Constructors

|  |
| --- |
| **[HoldAndReleaseData](#constructor-0)**() |
| **[HoldAndReleaseData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxHoldTime" >}} | float |
| {{< prop "minPowerModifier" >}} | float |
| {{< prop "maxPowerModifier" >}} | float |
| {{< prop "powerIncreasePerSecond" >}} | float |
| {{< prop "delay" >}} | float |
| {{< prop "killedHoldingPowerModifier" >}} | float |
| {{< prop "forceFireWhenKilledHolding" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [HoldAndReleaseData](/vext/ref/fb/holdandreleasedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HoldAndReleaseData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HoldAndReleaseData {#constructor-0}

> **HoldAndReleaseData**()

Creates a new [HoldAndReleaseData](/vext/ref/fb/holdandreleasedata) frostbite instance.

### HoldAndReleaseData {#constructor-1}

> **HoldAndReleaseData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HoldAndReleaseData](/vext/ref/fb/holdandreleasedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "maxHoldTime" %}}

> **float**

### {{% prop-heading "minPowerModifier" %}}

> **float**

### {{% prop-heading "maxPowerModifier" %}}

> **float**

### {{% prop-heading "powerIncreasePerSecond" %}}

> **float**

### {{% prop-heading "delay" %}}

> **float**

### {{% prop-heading "killedHoldingPowerModifier" %}}

> **float**

### {{% prop-heading "forceFireWhenKilledHolding" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [HoldAndReleaseData](/vext/ref/fb/holdandreleasedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HoldAndReleaseData](/vext/ref/fb/holdandreleasedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HoldAndReleaseData](/vext/ref/fb/holdandreleasedata) type.

