---
title: RotorModelData
---

## Summary

### Constructors

|  |
| --- |
| **[RotorModelData](#constructor-0)**() |
| **[RotorModelData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rotationRpm" >}} | float |
| {{< prop "partIndex" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [RotorModelData](/vext/ref/fb/rotormodeldata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RotorModelData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RotorModelData {#constructor-0}

> **RotorModelData**()

Creates a new [RotorModelData](/vext/ref/fb/rotormodeldata) frostbite instance.

### RotorModelData {#constructor-1}

> **RotorModelData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RotorModelData](/vext/ref/fb/rotormodeldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "rotationRpm" %}}

> **float**

### {{% prop-heading "partIndex" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [RotorModelData](/vext/ref/fb/rotormodeldata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RotorModelData](/vext/ref/fb/rotormodeldata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RotorModelData](/vext/ref/fb/rotormodeldata) type.

