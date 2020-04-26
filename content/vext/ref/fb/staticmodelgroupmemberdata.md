---
title: StaticModelGroupMemberData
---

## Summary

### Constructors

|  |
| --- |
| **[StaticModelGroupMemberData](#constructor-0)**() |
| **[StaticModelGroupMemberData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "instanceTransforms" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform)[] |
| {{< prop "instanceScale" >}} | float[] |
| {{< prop "instanceObjectVariation" >}} | int[] |
| {{< prop "instanceCastSunShadow" >}} | bool[] |
| {{< prop "memberType" >}} | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) \| nil |
| {{< prop "meshEntityType" >}} | [EntityData](/vext/ref/fb/entitydata) \| nil |
| {{< prop "instanceCount" >}} | int |
| {{< prop "healthStateEntityManagerId" >}} | int |
| {{< prop "physicsPartRange" >}} | [IndexRange](/vext/ref/fb/indexrange) |
| {{< prop "physicsPartCountPerInstance" >}} | int |
| {{< prop "networkIdRange" >}} | [IndexRange](/vext/ref/fb/indexrange) |
| {{< prop "networkIdCountPerInstance" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [StaticModelGroupMemberData](/vext/ref/fb/staticmodelgroupmemberdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StaticModelGroupMemberData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StaticModelGroupMemberData {#constructor-0}

> **StaticModelGroupMemberData**()

Creates a new [StaticModelGroupMemberData](/vext/ref/fb/staticmodelgroupmemberdata) frostbite instance.

### StaticModelGroupMemberData {#constructor-1}

> **StaticModelGroupMemberData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StaticModelGroupMemberData](/vext/ref/fb/staticmodelgroupmemberdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "instanceTransforms" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**[]

### {{% prop-heading "instanceScale" %}}

> **float**[]

### {{% prop-heading "instanceObjectVariation" %}}

> **int**[]

### {{% prop-heading "instanceCastSunShadow" %}}

> **bool**[]

### {{% prop-heading "memberType" %}}

> **[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)** \| **nil**

### {{% prop-heading "meshEntityType" %}}

> **[EntityData](/vext/ref/fb/entitydata)** \| **nil**

### {{% prop-heading "instanceCount" %}}

> **int**

### {{% prop-heading "healthStateEntityManagerId" %}}

> **int**

### {{% prop-heading "physicsPartRange" %}}

> **[IndexRange](/vext/ref/fb/indexrange)**

### {{% prop-heading "physicsPartCountPerInstance" %}}

> **int**

### {{% prop-heading "networkIdRange" %}}

> **[IndexRange](/vext/ref/fb/indexrange)**

### {{% prop-heading "networkIdCountPerInstance" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [StaticModelGroupMemberData](/vext/ref/fb/staticmodelgroupmemberdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[StaticModelGroupMemberData](/vext/ref/fb/staticmodelgroupmemberdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StaticModelGroupMemberData](/vext/ref/fb/staticmodelgroupmemberdata) type.

