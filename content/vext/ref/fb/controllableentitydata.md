---
title: ControllableEntityData
---

Inherits from [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)

## Summary

### Constructors

|  |
| --- |
| **[ControllableEntityData](#constructor-0)**() |
| **[ControllableEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ControllableEntityData](#constructor-2)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[ControllableEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[ControllableEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[ControllableEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ControllableEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ControllableEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ControllableEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "lowHealthThreshold" >}} | float |
| {{< prop "defaultTeam" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "materialPair" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "resetTeamOnLastPlayerExits" >}} | bool |
| {{< prop "fakeImmortal" >}} | bool |
| {{< prop "usePrediction" >}} | bool |
| {{< prop "immortal" >}} | bool |
| {{< prop "forceForegroundRendering" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ControllableEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ControllableEntityData {#constructor-0}

> **ControllableEntityData**()

Creates a new [ControllableEntityData](/vext/ref/fb/controllableentitydata) frostbite instance.

### ControllableEntityData {#constructor-1}

> **ControllableEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ControllableEntityData](/vext/ref/fb/controllableentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ControllableEntityData {#constructor-2}

> **ControllableEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [ControllableEntityData](/vext/ref/fb/controllableentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [ControllableEntityData](/vext/ref/fb/controllableentitydata). |

### ControllableEntityData {#constructor-3}

> **ControllableEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [ControllableEntityData](/vext/ref/fb/controllableentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [ControllableEntityData](/vext/ref/fb/controllableentitydata). |

### ControllableEntityData {#constructor-4}

> **ControllableEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [ControllableEntityData](/vext/ref/fb/controllableentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [ControllableEntityData](/vext/ref/fb/controllableentitydata). |

### ControllableEntityData {#constructor-5}

> **ControllableEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ControllableEntityData](/vext/ref/fb/controllableentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ControllableEntityData](/vext/ref/fb/controllableentitydata). |

### ControllableEntityData {#constructor-6}

> **ControllableEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ControllableEntityData](/vext/ref/fb/controllableentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ControllableEntityData](/vext/ref/fb/controllableentitydata). |

### ControllableEntityData {#constructor-7}

> **ControllableEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ControllableEntityData](/vext/ref/fb/controllableentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ControllableEntityData](/vext/ref/fb/controllableentitydata). |

### ControllableEntityData {#constructor-8}

> **ControllableEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ControllableEntityData](/vext/ref/fb/controllableentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ControllableEntityData](/vext/ref/fb/controllableentitydata). |

## Properties

### {{% prop-heading "lowHealthThreshold" %}}

> **float**

### {{% prop-heading "defaultTeam" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "materialPair" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** \| **nil**

### {{% prop-heading "resetTeamOnLastPlayerExits" %}}

> **bool**

### {{% prop-heading "fakeImmortal" %}}

> **bool**

### {{% prop-heading "usePrediction" %}}

> **bool**

### {{% prop-heading "immortal" %}}

> **bool**

### {{% prop-heading "forceForegroundRendering" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ControllableEntityData](/vext/ref/fb/controllableentitydata) type.

