---
title: StaticModelGroupEntityData
---

Inherits from [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)

## Summary

### Constructors

|  |
| --- |
| **[StaticModelGroupEntityData](#constructor-0)**() |
| **[StaticModelGroupEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StaticModelGroupEntityData](#constructor-2)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[StaticModelGroupEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[StaticModelGroupEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[StaticModelGroupEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[StaticModelGroupEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[StaticModelGroupEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[StaticModelGroupEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "memberDatas" >}} | [StaticModelGroupMemberData](/vext/ref/fb/staticmodelgroupmemberdata)[] |
| {{< prop "hackToSolveRealTimeTweakingIssue" >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "networkIdCount" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StaticModelGroupEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StaticModelGroupEntityData {#constructor-0}

> **StaticModelGroupEntityData**()

Creates a new [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata) frostbite instance.

### StaticModelGroupEntityData {#constructor-1}

> **StaticModelGroupEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StaticModelGroupEntityData {#constructor-2}

> **StaticModelGroupEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). |

### StaticModelGroupEntityData {#constructor-3}

> **StaticModelGroupEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). |

### StaticModelGroupEntityData {#constructor-4}

> **StaticModelGroupEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). |

### StaticModelGroupEntityData {#constructor-5}

> **StaticModelGroupEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). |

### StaticModelGroupEntityData {#constructor-6}

> **StaticModelGroupEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). |

### StaticModelGroupEntityData {#constructor-7}

> **StaticModelGroupEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). |

### StaticModelGroupEntityData {#constructor-8}

> **StaticModelGroupEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata). |

## Properties

### {{% prop-heading "memberDatas" %}}

> **[StaticModelGroupMemberData](/vext/ref/fb/staticmodelgroupmemberdata)**[]

### {{% prop-heading "hackToSolveRealTimeTweakingIssue" %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "networkIdCount" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata) type.

