---
title: GameSplineEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[GameSplineEntityData](#constructor-0)**() |
| **[GameSplineEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GameSplineEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[GameSplineEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[GameSplineEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[GameSplineEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[GameSplineEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[GameSplineEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "splineType" >}} | [GameSplineType](/vext/ref/fb/gamesplinetype) |
| {{< prop "localPoints" >}} | [Vec3](/vext/ref/shared/type/vec3)[] |
| {{< prop "normals" >}} | [Vec3](/vext/ref/shared/type/vec3)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GameSplineEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GameSplineEntityData {#constructor-0}

> **GameSplineEntityData**()

Creates a new [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata) frostbite instance.

### GameSplineEntityData {#constructor-1}

> **GameSplineEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GameSplineEntityData {#constructor-2}

> **GameSplineEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). |

### GameSplineEntityData {#constructor-3}

> **GameSplineEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). |

### GameSplineEntityData {#constructor-4}

> **GameSplineEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). |

### GameSplineEntityData {#constructor-5}

> **GameSplineEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). |

### GameSplineEntityData {#constructor-6}

> **GameSplineEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). |

### GameSplineEntityData {#constructor-7}

> **GameSplineEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata). |

## Properties

### {{% prop-heading "splineType" %}}

> **[GameSplineType](/vext/ref/fb/gamesplinetype)**

### {{% prop-heading "localPoints" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**[]

### {{% prop-heading "normals" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GameSplineEntityData](/vext/ref/fb/gamesplineentitydata) type.

