---
title: MissileUnguidedData
---

## Summary

### Constructors

|  |
| --- |
| **[MissileUnguidedData](#constructor-0)**() |
| **[MissileUnguidedData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "staticPosition" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "targetPositionOffset" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "useTargetPosition" >}} | bool |
| {{< prop "useStaticPosition" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MissileUnguidedData](/vext/ref/fb/missileunguideddata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MissileUnguidedData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MissileUnguidedData {#constructor-0}

> **MissileUnguidedData**()

Creates a new [MissileUnguidedData](/vext/ref/fb/missileunguideddata) frostbite instance.

### MissileUnguidedData {#constructor-1}

> **MissileUnguidedData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MissileUnguidedData](/vext/ref/fb/missileunguideddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "staticPosition" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "targetPositionOffset" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "useTargetPosition" %}}

> **bool**

### {{% prop-heading "useStaticPosition" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [MissileUnguidedData](/vext/ref/fb/missileunguideddata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MissileUnguidedData](/vext/ref/fb/missileunguideddata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MissileUnguidedData](/vext/ref/fb/missileunguideddata) type.

