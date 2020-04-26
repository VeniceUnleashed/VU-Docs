---
title: SmokeJammingData
---

## Summary

### Constructors

|  |
| --- |
| **[SmokeJammingData](#constructor-0)**() |
| **[SmokeJammingData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "jammingTime" >}} | float |
| {{< prop "maxRadius" >}} | float |
| {{< prop "minRadius" >}} | float |
| {{< prop "targetUpdateTime" >}} | float |
| {{< prop "enableSmokeJamming" >}} | bool |
| {{< prop "jammingPositionIsLocationDependent" >}} | bool |
| {{< prop "reportJammedBasedOnStartPosition" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SmokeJammingData](/vext/ref/fb/smokejammingdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SmokeJammingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SmokeJammingData {#constructor-0}

> **SmokeJammingData**()

Creates a new [SmokeJammingData](/vext/ref/fb/smokejammingdata) frostbite instance.

### SmokeJammingData {#constructor-1}

> **SmokeJammingData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SmokeJammingData](/vext/ref/fb/smokejammingdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "jammingTime" %}}

> **float**

### {{% prop-heading "maxRadius" %}}

> **float**

### {{% prop-heading "minRadius" %}}

> **float**

### {{% prop-heading "targetUpdateTime" %}}

> **float**

### {{% prop-heading "enableSmokeJamming" %}}

> **bool**

### {{% prop-heading "jammingPositionIsLocationDependent" %}}

> **bool**

### {{% prop-heading "reportJammedBasedOnStartPosition" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [SmokeJammingData](/vext/ref/fb/smokejammingdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SmokeJammingData](/vext/ref/fb/smokejammingdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SmokeJammingData](/vext/ref/fb/smokejammingdata) type.

