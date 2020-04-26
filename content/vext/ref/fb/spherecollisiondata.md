---
title: SphereCollisionData
---

## Summary

### Constructors

|  |
| --- |
| **[SphereCollisionData](#constructor-0)**() |
| **[SphereCollisionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "extraRadius" >}} | float |
| {{< prop "counterNormalBrakeForceMod" >}} | float |
| {{< prop "enabled" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SphereCollisionData](/vext/ref/fb/spherecollisiondata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SphereCollisionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SphereCollisionData {#constructor-0}

> **SphereCollisionData**()

Creates a new [SphereCollisionData](/vext/ref/fb/spherecollisiondata) frostbite instance.

### SphereCollisionData {#constructor-1}

> **SphereCollisionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SphereCollisionData](/vext/ref/fb/spherecollisiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "extraRadius" %}}

> **float**

### {{% prop-heading "counterNormalBrakeForceMod" %}}

> **float**

### {{% prop-heading "enabled" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [SphereCollisionData](/vext/ref/fb/spherecollisiondata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SphereCollisionData](/vext/ref/fb/spherecollisiondata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SphereCollisionData](/vext/ref/fb/spherecollisiondata) type.

