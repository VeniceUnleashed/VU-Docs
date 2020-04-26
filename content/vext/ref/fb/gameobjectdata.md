---
title: GameObjectData
---

Inherits from [GameDataContainer](/vext/ref/fb/gamedatacontainer)

## Summary

### Constructors

|  |
| --- |
| **[GameObjectData](#constructor-0)**() |
| **[GameObjectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GameObjectData](#constructor-2)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[GameObjectData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "indexInBlueprint" >}} | int |
| {{< prop "isEventConnectionTarget" >}} | int |
| {{< prop "isPropertyConnectionTarget" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GameObjectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GameObjectData {#constructor-0}

> **GameObjectData**()

Creates a new [GameObjectData](/vext/ref/fb/gameobjectdata) frostbite instance.

### GameObjectData {#constructor-1}

> **GameObjectData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GameObjectData](/vext/ref/fb/gameobjectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GameObjectData {#constructor-2}

> **GameObjectData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [GameObjectData](/vext/ref/fb/gameobjectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [GameObjectData](/vext/ref/fb/gameobjectdata). |

### GameObjectData {#constructor-3}

> **GameObjectData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GameObjectData](/vext/ref/fb/gameobjectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GameObjectData](/vext/ref/fb/gameobjectdata). |

## Properties

### {{% prop-heading "indexInBlueprint" %}}

> **int**

### {{% prop-heading "isEventConnectionTarget" %}}

> **int**

### {{% prop-heading "isPropertyConnectionTarget" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GameObjectData](/vext/ref/fb/gameobjectdata) type.

