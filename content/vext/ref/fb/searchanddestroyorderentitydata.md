---
title: SearchAndDestroyOrderEntityData
---

Inherits from [BFOrderEntityData](/vext/ref/fb/bforderentitydata)

## Summary

### Constructors

|  |
| --- |
| **[SearchAndDestroyOrderEntityData](#constructor-0)**() |
| **[SearchAndDestroyOrderEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SearchAndDestroyOrderEntityData](#constructor-2)**(other: [BFOrderEntityData](/vext/ref/fb/bforderentitydata)) |
| **[SearchAndDestroyOrderEntityData](#constructor-3)**(other: [OrderEntityData](/vext/ref/fb/orderentitydata)) |
| **[SearchAndDestroyOrderEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SearchAndDestroyOrderEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SearchAndDestroyOrderEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SearchAndDestroyOrderEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "targetPosKnowledge" >}} | [TargetPosKnowledgeType](/vext/ref/fb/targetposknowledgetype) |
| {{< prop "findTargetTime" >}} | float |
| {{< prop "targetAreaFollowsTarget" >}} | bool |
| {{< prop "aggressive" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SearchAndDestroyOrderEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SearchAndDestroyOrderEntityData {#constructor-0}

> **SearchAndDestroyOrderEntityData**()

Creates a new [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata) frostbite instance.

### SearchAndDestroyOrderEntityData {#constructor-1}

> **SearchAndDestroyOrderEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SearchAndDestroyOrderEntityData {#constructor-2}

> **SearchAndDestroyOrderEntityData**(other: [BFOrderEntityData](/vext/ref/fb/bforderentitydata))

Casts an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [BFOrderEntityData](/vext/ref/fb/bforderentitydata) | The instance to cast to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). |

### SearchAndDestroyOrderEntityData {#constructor-3}

> **SearchAndDestroyOrderEntityData**(other: [OrderEntityData](/vext/ref/fb/orderentitydata))

Casts an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [OrderEntityData](/vext/ref/fb/orderentitydata) | The instance to cast to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). |

### SearchAndDestroyOrderEntityData {#constructor-4}

> **SearchAndDestroyOrderEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). |

### SearchAndDestroyOrderEntityData {#constructor-5}

> **SearchAndDestroyOrderEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). |

### SearchAndDestroyOrderEntityData {#constructor-6}

> **SearchAndDestroyOrderEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). |

### SearchAndDestroyOrderEntityData {#constructor-7}

> **SearchAndDestroyOrderEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata). |

## Properties

### {{% prop-heading "targetPosKnowledge" %}}

> **[TargetPosKnowledgeType](/vext/ref/fb/targetposknowledgetype)**

### {{% prop-heading "findTargetTime" %}}

> **float**

### {{% prop-heading "targetAreaFollowsTarget" %}}

> **bool**

### {{% prop-heading "aggressive" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata) type.

