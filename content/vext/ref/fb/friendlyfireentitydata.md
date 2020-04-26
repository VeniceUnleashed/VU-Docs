---
title: FriendlyFireEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[FriendlyFireEntityData](#constructor-0)**() |
| **[FriendlyFireEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FriendlyFireEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[FriendlyFireEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[FriendlyFireEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FriendlyFireEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "teams" >}} | [TeamId](/vext/ref/fb/teamid)[] |
| {{< prop "enemyCommitmentAllocation" >}} | float |
| {{< prop "friendlyCommitmentAllocation" >}} | float |
| {{< prop "maxCommitment" >}} | float |
| {{< prop "failureThreshold" >}} | float |
| {{< prop "decayRate" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FriendlyFireEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FriendlyFireEntityData {#constructor-0}

> **FriendlyFireEntityData**()

Creates a new [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata) frostbite instance.

### FriendlyFireEntityData {#constructor-1}

> **FriendlyFireEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FriendlyFireEntityData {#constructor-2}

> **FriendlyFireEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata). |

### FriendlyFireEntityData {#constructor-3}

> **FriendlyFireEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata). |

### FriendlyFireEntityData {#constructor-4}

> **FriendlyFireEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata). |

### FriendlyFireEntityData {#constructor-5}

> **FriendlyFireEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata). |

## Properties

### {{% prop-heading "teams" %}}

> **[TeamId](/vext/ref/fb/teamid)**[]

### {{% prop-heading "enemyCommitmentAllocation" %}}

> **float**

### {{% prop-heading "friendlyCommitmentAllocation" %}}

> **float**

### {{% prop-heading "maxCommitment" %}}

> **float**

### {{% prop-heading "failureThreshold" %}}

> **float**

### {{% prop-heading "decayRate" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata) type.

