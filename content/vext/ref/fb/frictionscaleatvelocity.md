---
title: FrictionScaleAtVelocity
---

## Summary

### Constructors

|  |
| --- |
| **[FrictionScaleAtVelocity](#constructor-0)**() |
| **[FrictionScaleAtVelocity](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "frictionScale" >}} | float |
| {{< prop "velocity" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [FrictionScaleAtVelocity](/vext/ref/fb/frictionscaleatvelocity) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FrictionScaleAtVelocity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FrictionScaleAtVelocity {#constructor-0}

> **FrictionScaleAtVelocity**()

Creates a new [FrictionScaleAtVelocity](/vext/ref/fb/frictionscaleatvelocity) frostbite instance.

### FrictionScaleAtVelocity {#constructor-1}

> **FrictionScaleAtVelocity**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FrictionScaleAtVelocity](/vext/ref/fb/frictionscaleatvelocity) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "frictionScale" %}}

> **float**

### {{% prop-heading "velocity" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [FrictionScaleAtVelocity](/vext/ref/fb/frictionscaleatvelocity)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[FrictionScaleAtVelocity](/vext/ref/fb/frictionscaleatvelocity)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FrictionScaleAtVelocity](/vext/ref/fb/frictionscaleatvelocity) type.

