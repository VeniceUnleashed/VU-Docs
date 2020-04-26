---
title: FlagCounterEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[FlagCounterEntityData](#constructor-0)**() |
| **[FlagCounterEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FlagCounterEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[FlagCounterEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[FlagCounterEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[FlagCounterEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[FlagCounterEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FlagCounterEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "teamId" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "enemyFlagProgress" >}} | float |
| {{< prop "roundTime" >}} | float |
| {{< prop "objectiveFlagCount" >}} | int |
| {{< prop "visibleInMinimap" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FlagCounterEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FlagCounterEntityData {#constructor-0}

> **FlagCounterEntityData**()

Creates a new [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata) frostbite instance.

### FlagCounterEntityData {#constructor-1}

> **FlagCounterEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FlagCounterEntityData {#constructor-2}

> **FlagCounterEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). |

### FlagCounterEntityData {#constructor-3}

> **FlagCounterEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). |

### FlagCounterEntityData {#constructor-4}

> **FlagCounterEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). |

### FlagCounterEntityData {#constructor-5}

> **FlagCounterEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). |

### FlagCounterEntityData {#constructor-6}

> **FlagCounterEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). |

### FlagCounterEntityData {#constructor-7}

> **FlagCounterEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata). |

## Properties

### {{% prop-heading "teamId" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "enemyFlagProgress" %}}

> **float**

### {{% prop-heading "roundTime" %}}

> **float**

### {{% prop-heading "objectiveFlagCount" %}}

> **int**

### {{% prop-heading "visibleInMinimap" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata) type.

