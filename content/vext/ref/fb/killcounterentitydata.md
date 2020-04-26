---
title: KillCounterEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[KillCounterEntityData](#constructor-0)**() |
| **[KillCounterEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[KillCounterEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[KillCounterEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[KillCounterEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[KillCounterEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[KillCounterEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[KillCounterEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "teamKillWeight" >}} | [KillWeight](/vext/ref/fb/killweight) |
| {{< prop "teamId" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "neutralTeamWeight" >}} | [KillWeight](/vext/ref/fb/killweight) |
| {{< prop "enemyWeight" >}} | float |
| {{< prop "maxKillCount" >}} | int |
| {{< prop "ignoreAI" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "KillCounterEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### KillCounterEntityData {#constructor-0}

> **KillCounterEntityData**()

Creates a new [KillCounterEntityData](/vext/ref/fb/killcounterentitydata) frostbite instance.

### KillCounterEntityData {#constructor-1}

> **KillCounterEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [KillCounterEntityData](/vext/ref/fb/killcounterentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### KillCounterEntityData {#constructor-2}

> **KillCounterEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). |

### KillCounterEntityData {#constructor-3}

> **KillCounterEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). |

### KillCounterEntityData {#constructor-4}

> **KillCounterEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). |

### KillCounterEntityData {#constructor-5}

> **KillCounterEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). |

### KillCounterEntityData {#constructor-6}

> **KillCounterEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). |

### KillCounterEntityData {#constructor-7}

> **KillCounterEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata). |

## Properties

### {{% prop-heading "teamKillWeight" %}}

> **[KillWeight](/vext/ref/fb/killweight)**

### {{% prop-heading "teamId" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "neutralTeamWeight" %}}

> **[KillWeight](/vext/ref/fb/killweight)**

### {{% prop-heading "enemyWeight" %}}

> **float**

### {{% prop-heading "maxKillCount" %}}

> **int**

### {{% prop-heading "ignoreAI" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [KillCounterEntityData](/vext/ref/fb/killcounterentitydata) type.

