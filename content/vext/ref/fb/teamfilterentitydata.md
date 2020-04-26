---
title: TeamFilterEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[TeamFilterEntityData](#constructor-0)**() |
| **[TeamFilterEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TeamFilterEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[TeamFilterEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[TeamFilterEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[TeamFilterEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[TeamFilterEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[TeamFilterEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "team" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "invertFilter" >}} | bool |
| {{< prop "generateEventForEveryMatchingTeamMember" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TeamFilterEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TeamFilterEntityData {#constructor-0}

> **TeamFilterEntityData**()

Creates a new [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata) frostbite instance.

### TeamFilterEntityData {#constructor-1}

> **TeamFilterEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TeamFilterEntityData {#constructor-2}

> **TeamFilterEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). |

### TeamFilterEntityData {#constructor-3}

> **TeamFilterEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). |

### TeamFilterEntityData {#constructor-4}

> **TeamFilterEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). |

### TeamFilterEntityData {#constructor-5}

> **TeamFilterEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). |

### TeamFilterEntityData {#constructor-6}

> **TeamFilterEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). |

### TeamFilterEntityData {#constructor-7}

> **TeamFilterEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "team" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "invertFilter" %}}

> **bool**

### {{% prop-heading "generateEventForEveryMatchingTeamMember" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata) type.

