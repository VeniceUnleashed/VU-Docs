---
title: BangerEntityData
---

Inherits from [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata)

## Summary

### Constructors

|  |
| --- |
| **[BangerEntityData](#constructor-0)**() |
| **[BangerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BangerEntityData](#constructor-2)**(other: [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata)) |
| **[BangerEntityData](#constructor-3)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[BangerEntityData](#constructor-4)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[BangerEntityData](#constructor-5)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[BangerEntityData](#constructor-6)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[BangerEntityData](#constructor-7)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[BangerEntityData](#constructor-8)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[BangerEntityData](#constructor-9)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "scales" >}} | float[] |
| {{< prop "mesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "explosion" >}} | [ExplosionEntityData](/vext/ref/fb/explosionentitydata) \| nil |
| {{< prop "timeToLive" >}} | float |
| {{< prop "destructiblePartCount" >}} | int |
| {{< prop "useVariableNetworkFrequency" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BangerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BangerEntityData {#constructor-0}

> **BangerEntityData**()

Creates a new [BangerEntityData](/vext/ref/fb/bangerentitydata) frostbite instance.

### BangerEntityData {#constructor-1}

> **BangerEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BangerEntityData](/vext/ref/fb/bangerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BangerEntityData {#constructor-2}

> **BangerEntityData**(other: [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata))

Casts an instance of type [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata) to [BangerEntityData](/vext/ref/fb/bangerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata) | The instance to cast to [BangerEntityData](/vext/ref/fb/bangerentitydata). |

### BangerEntityData {#constructor-3}

> **BangerEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [BangerEntityData](/vext/ref/fb/bangerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [BangerEntityData](/vext/ref/fb/bangerentitydata). |

### BangerEntityData {#constructor-4}

> **BangerEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [BangerEntityData](/vext/ref/fb/bangerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [BangerEntityData](/vext/ref/fb/bangerentitydata). |

### BangerEntityData {#constructor-5}

> **BangerEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [BangerEntityData](/vext/ref/fb/bangerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [BangerEntityData](/vext/ref/fb/bangerentitydata). |

### BangerEntityData {#constructor-6}

> **BangerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [BangerEntityData](/vext/ref/fb/bangerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [BangerEntityData](/vext/ref/fb/bangerentitydata). |

### BangerEntityData {#constructor-7}

> **BangerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [BangerEntityData](/vext/ref/fb/bangerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [BangerEntityData](/vext/ref/fb/bangerentitydata). |

### BangerEntityData {#constructor-8}

> **BangerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [BangerEntityData](/vext/ref/fb/bangerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [BangerEntityData](/vext/ref/fb/bangerentitydata). |

### BangerEntityData {#constructor-9}

> **BangerEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BangerEntityData](/vext/ref/fb/bangerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BangerEntityData](/vext/ref/fb/bangerentitydata). |

## Properties

### {{% prop-heading "scales" %}}

> **float**[]

### {{% prop-heading "mesh" %}}

> **[MeshAsset](/vext/ref/fb/meshasset)** \| **nil**

### {{% prop-heading "explosion" %}}

> **[ExplosionEntityData](/vext/ref/fb/explosionentitydata)** \| **nil**

### {{% prop-heading "timeToLive" %}}

> **float**

### {{% prop-heading "destructiblePartCount" %}}

> **int**

### {{% prop-heading "useVariableNetworkFrequency" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BangerEntityData](/vext/ref/fb/bangerentitydata) type.

