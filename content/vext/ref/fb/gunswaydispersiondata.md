---
title: GunSwayDispersionData
---

## Summary

### Constructors

|  |
| --- |
| **[GunSwayDispersionData](#constructor-0)**() |
| **[GunSwayDispersionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minAngle" >}} | float |
| {{< prop "maxAngle" >}} | float |
| {{< prop "increasePerShot" >}} | float |
| {{< prop "decreasePerSecond" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GunSwayDispersionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GunSwayDispersionData {#constructor-0}

> **GunSwayDispersionData**()

Creates a new [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) frostbite instance.

### GunSwayDispersionData {#constructor-1}

> **GunSwayDispersionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "minAngle" %}}

> **float**

### {{% prop-heading "maxAngle" %}}

> **float**

### {{% prop-heading "increasePerShot" %}}

> **float**

### {{% prop-heading "decreasePerSecond" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) type.

