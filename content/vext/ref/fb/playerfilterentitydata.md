---
title: PlayerFilterEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[PlayerFilterEntityData](#constructor-0)**() |
| **[PlayerFilterEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PlayerFilterEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[PlayerFilterEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PlayerFilterEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PlayerFilterEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "invertFilter" >}} | bool |
| {{< prop "forwardToSpectators" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PlayerFilterEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PlayerFilterEntityData {#constructor-0}

> **PlayerFilterEntityData**()

Creates a new [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata) frostbite instance.

### PlayerFilterEntityData {#constructor-1}

> **PlayerFilterEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PlayerFilterEntityData {#constructor-2}

> **PlayerFilterEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata). |

### PlayerFilterEntityData {#constructor-3}

> **PlayerFilterEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata). |

### PlayerFilterEntityData {#constructor-4}

> **PlayerFilterEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata). |

### PlayerFilterEntityData {#constructor-5}

> **PlayerFilterEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "invertFilter" %}}

> **bool**

### {{% prop-heading "forwardToSpectators" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata) type.

