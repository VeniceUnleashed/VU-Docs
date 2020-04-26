---
title: MovieEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[MovieEntityData](#constructor-0)**() |
| **[MovieEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MovieEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[MovieEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[MovieEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[MovieEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MovieEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MovieEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "movie" >}} | [MovieTextureAsset](/vext/ref/fb/movietextureasset) \| nil |
| {{< prop "externalTime" >}} | float |
| {{< prop "isNormalMap" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MovieEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MovieEntityData {#constructor-0}

> **MovieEntityData**()

Creates a new [MovieEntityData](/vext/ref/fb/movieentitydata) frostbite instance.

### MovieEntityData {#constructor-1}

> **MovieEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MovieEntityData](/vext/ref/fb/movieentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MovieEntityData {#constructor-2}

> **MovieEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [MovieEntityData](/vext/ref/fb/movieentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [MovieEntityData](/vext/ref/fb/movieentitydata). |

### MovieEntityData {#constructor-3}

> **MovieEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [MovieEntityData](/vext/ref/fb/movieentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [MovieEntityData](/vext/ref/fb/movieentitydata). |

### MovieEntityData {#constructor-4}

> **MovieEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [MovieEntityData](/vext/ref/fb/movieentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [MovieEntityData](/vext/ref/fb/movieentitydata). |

### MovieEntityData {#constructor-5}

> **MovieEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MovieEntityData](/vext/ref/fb/movieentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MovieEntityData](/vext/ref/fb/movieentitydata). |

### MovieEntityData {#constructor-6}

> **MovieEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MovieEntityData](/vext/ref/fb/movieentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MovieEntityData](/vext/ref/fb/movieentitydata). |

### MovieEntityData {#constructor-7}

> **MovieEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MovieEntityData](/vext/ref/fb/movieentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MovieEntityData](/vext/ref/fb/movieentitydata). |

## Properties

### {{% prop-heading "movie" %}}

> **[MovieTextureAsset](/vext/ref/fb/movietextureasset)** \| **nil**

### {{% prop-heading "externalTime" %}}

> **float**

### {{% prop-heading "isNormalMap" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MovieEntityData](/vext/ref/fb/movieentitydata) type.

