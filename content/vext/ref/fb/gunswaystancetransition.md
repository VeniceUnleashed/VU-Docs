---
title: GunSwayStanceTransition
---

## Summary

### Constructors

|  |
| --- |
| **[GunSwayStanceTransition](#constructor-0)**() |
| **[GunSwayStanceTransition](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxPenaltyValue" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "coolDown" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GunSwayStanceTransition" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GunSwayStanceTransition {#constructor-0}

> **GunSwayStanceTransition**()

Creates a new [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) frostbite instance.

### GunSwayStanceTransition {#constructor-1}

> **GunSwayStanceTransition**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "maxPenaltyValue" %}}

> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "coolDown" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) type.

