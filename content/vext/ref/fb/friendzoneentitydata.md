---
title: FriendZoneEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[FriendZoneEntityData](#constructor-0)**() |
| **[FriendZoneEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FriendZoneEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[FriendZoneEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[FriendZoneEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FriendZoneEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "enemyWeight" >}} | int |
| {{< prop "friendlyWeight" >}} | int |
| {{< prop "corpsTimeout" >}} | int |
| {{< prop "corpsWeight" >}} | int |
| {{< prop "countCorpsesForAllTeams" >}} | bool |
| {{< prop "initialZoneRandomized" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FriendZoneEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FriendZoneEntityData {#constructor-0}

> **FriendZoneEntityData**()

Creates a new [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata) frostbite instance.

### FriendZoneEntityData {#constructor-1}

> **FriendZoneEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FriendZoneEntityData {#constructor-2}

> **FriendZoneEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata). |

### FriendZoneEntityData {#constructor-3}

> **FriendZoneEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata). |

### FriendZoneEntityData {#constructor-4}

> **FriendZoneEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata). |

### FriendZoneEntityData {#constructor-5}

> **FriendZoneEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata). |

## Properties

### {{% prop-heading "enemyWeight" %}}

> **int**

### {{% prop-heading "friendlyWeight" %}}

> **int**

### {{% prop-heading "corpsTimeout" %}}

> **int**

### {{% prop-heading "corpsWeight" %}}

> **int**

### {{% prop-heading "countCorpsesForAllTeams" %}}

> **bool**

### {{% prop-heading "initialZoneRandomized" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata) type.

