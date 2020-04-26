---
title: HealthStateData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[HealthStateData](#constructor-0)**() |
| **[HealthStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[HealthStateData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "objects" >}} | [GameObjectData](/vext/ref/fb/gameobjectdata)[] |
| {{< prop "loosePartPhysics" >}} | [NetworkableLoosePartPhysicsData](/vext/ref/fb/networkableloosepartphysicsdata)[] |
| {{< prop "spawnedBangerBlueprint" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "spawnedBangerImpulseParams" >}} | [BangerSpawnImpulseParams](/vext/ref/fb/bangerspawnimpulseparams) \| nil |
| {{< prop "health" >}} | float |
| {{< prop "partIndex" >}} | int |
| {{< prop "physicsEnabled" >}} | bool |
| {{< prop "copyDamageToBanger" >}} | bool |
| {{< prop "canSupportOtherParts" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HealthStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HealthStateData {#constructor-0}

> **HealthStateData**()

Creates a new [HealthStateData](/vext/ref/fb/healthstatedata) frostbite instance.

### HealthStateData {#constructor-1}

> **HealthStateData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HealthStateData](/vext/ref/fb/healthstatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### HealthStateData {#constructor-2}

> **HealthStateData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [HealthStateData](/vext/ref/fb/healthstatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [HealthStateData](/vext/ref/fb/healthstatedata). |

## Properties

### {{% prop-heading "objects" %}}

> **[GameObjectData](/vext/ref/fb/gameobjectdata)**[]

### {{% prop-heading "loosePartPhysics" %}}

> **[NetworkableLoosePartPhysicsData](/vext/ref/fb/networkableloosepartphysicsdata)**[]

### {{% prop-heading "spawnedBangerBlueprint" %}}

> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** \| **nil**

### {{% prop-heading "spawnedBangerImpulseParams" %}}

> **[BangerSpawnImpulseParams](/vext/ref/fb/bangerspawnimpulseparams)** \| **nil**

### {{% prop-heading "health" %}}

> **float**

### {{% prop-heading "partIndex" %}}

> **int**

### {{% prop-heading "physicsEnabled" %}}

> **bool**

### {{% prop-heading "copyDamageToBanger" %}}

> **bool**

### {{% prop-heading "canSupportOtherParts" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HealthStateData](/vext/ref/fb/healthstatedata) type.

