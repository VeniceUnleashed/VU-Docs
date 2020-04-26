---
title: SpottingEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[SpottingEntityData](#constructor-0)**() |
| **[SpottingEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SpottingEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SpottingEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SpottingEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SpottingEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "teamToSpot" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "enabled" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpottingEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpottingEntityData {#constructor-0}

> **SpottingEntityData**()

Creates a new [SpottingEntityData](/vext/ref/fb/spottingentitydata) frostbite instance.

### SpottingEntityData {#constructor-1}

> **SpottingEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SpottingEntityData](/vext/ref/fb/spottingentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SpottingEntityData {#constructor-2}

> **SpottingEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SpottingEntityData](/vext/ref/fb/spottingentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SpottingEntityData](/vext/ref/fb/spottingentitydata). |

### SpottingEntityData {#constructor-3}

> **SpottingEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SpottingEntityData](/vext/ref/fb/spottingentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SpottingEntityData](/vext/ref/fb/spottingentitydata). |

### SpottingEntityData {#constructor-4}

> **SpottingEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SpottingEntityData](/vext/ref/fb/spottingentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SpottingEntityData](/vext/ref/fb/spottingentitydata). |

### SpottingEntityData {#constructor-5}

> **SpottingEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SpottingEntityData](/vext/ref/fb/spottingentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SpottingEntityData](/vext/ref/fb/spottingentitydata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "teamToSpot" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "enabled" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SpottingEntityData](/vext/ref/fb/spottingentitydata) type.

