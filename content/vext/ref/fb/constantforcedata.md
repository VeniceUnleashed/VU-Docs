---
title: ConstantForceData
---

## Summary

### Constructors

|  |
| --- |
| **[ConstantForceData](#constructor-0)**() |
| **[ConstantForceData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "condition" >}} | [ForceCondition](/vext/ref/fb/forcecondition) |
| {{< prop "typeOfForce" >}} | [ForceType](/vext/ref/fb/forcetype) |
| {{< prop "space" >}} | [SpaceType](/vext/ref/fb/spacetype) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ConstantForceData](/vext/ref/fb/constantforcedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ConstantForceData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ConstantForceData {#constructor-0}

> **ConstantForceData**()

Creates a new [ConstantForceData](/vext/ref/fb/constantforcedata) frostbite instance.

### ConstantForceData {#constructor-1}

> **ConstantForceData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ConstantForceData](/vext/ref/fb/constantforcedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "value" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "condition" %}}

> **[ForceCondition](/vext/ref/fb/forcecondition)**

### {{% prop-heading "typeOfForce" %}}

> **[ForceType](/vext/ref/fb/forcetype)**

### {{% prop-heading "space" %}}

> **[SpaceType](/vext/ref/fb/spacetype)**

## Methods

### Clone {#clone}

> **Clone**(): [ConstantForceData](/vext/ref/fb/constantforcedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ConstantForceData](/vext/ref/fb/constantforcedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ConstantForceData](/vext/ref/fb/constantforcedata) type.

