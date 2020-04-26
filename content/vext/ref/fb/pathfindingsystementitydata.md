---
title: PathfindingSystemEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[PathfindingSystemEntityData](#constructor-0)**() |
| **[PathfindingSystemEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PathfindingSystemEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[PathfindingSystemEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PathfindingSystemEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PathfindingSystemEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "pathfindingTypesOnLevel" >}} | int[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PathfindingSystemEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PathfindingSystemEntityData {#constructor-0}

> **PathfindingSystemEntityData**()

Creates a new [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata) frostbite instance.

### PathfindingSystemEntityData {#constructor-1}

> **PathfindingSystemEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PathfindingSystemEntityData {#constructor-2}

> **PathfindingSystemEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata). |

### PathfindingSystemEntityData {#constructor-3}

> **PathfindingSystemEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata). |

### PathfindingSystemEntityData {#constructor-4}

> **PathfindingSystemEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata). |

### PathfindingSystemEntityData {#constructor-5}

> **PathfindingSystemEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata). |

## Properties

### {{% prop-heading "pathfindingTypesOnLevel" %}}

> **int**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata) type.

