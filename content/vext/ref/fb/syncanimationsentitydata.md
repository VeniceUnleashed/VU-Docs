---
title: SyncAnimationsEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[SyncAnimationsEntityData](#constructor-0)**() |
| **[SyncAnimationsEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SyncAnimationsEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SyncAnimationsEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SyncAnimationsEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SyncAnimationsEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "externalTime" >}} | float |
| {{< prop "nearEndEventTime" >}} | float |
| {{< prop "startServerPaused" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SyncAnimationsEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SyncAnimationsEntityData {#constructor-0}

> **SyncAnimationsEntityData**()

Creates a new [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata) frostbite instance.

### SyncAnimationsEntityData {#constructor-1}

> **SyncAnimationsEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SyncAnimationsEntityData {#constructor-2}

> **SyncAnimationsEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata). |

### SyncAnimationsEntityData {#constructor-3}

> **SyncAnimationsEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata). |

### SyncAnimationsEntityData {#constructor-4}

> **SyncAnimationsEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata). |

### SyncAnimationsEntityData {#constructor-5}

> **SyncAnimationsEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata). |

## Properties

### {{% prop-heading "externalTime" %}}

> **float**

### {{% prop-heading "nearEndEventTime" %}}

> **float**

### {{% prop-heading "startServerPaused" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata) type.

