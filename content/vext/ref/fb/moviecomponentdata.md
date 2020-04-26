---
title: MovieComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[MovieComponentData](#constructor-0)**() |
| **[MovieComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MovieComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[MovieComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MovieComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MovieComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "movie" >}} | [MovieTextureAsset](/vext/ref/fb/movietextureasset) \| nil |
| {{< prop "externalTime" >}} | float |
| {{< prop "isNormalMap" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MovieComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MovieComponentData {#constructor-0}

> **MovieComponentData**()

Creates a new [MovieComponentData](/vext/ref/fb/moviecomponentdata) frostbite instance.

### MovieComponentData {#constructor-1}

> **MovieComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MovieComponentData](/vext/ref/fb/moviecomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MovieComponentData {#constructor-2}

> **MovieComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [MovieComponentData](/vext/ref/fb/moviecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [MovieComponentData](/vext/ref/fb/moviecomponentdata). |

### MovieComponentData {#constructor-3}

> **MovieComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MovieComponentData](/vext/ref/fb/moviecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MovieComponentData](/vext/ref/fb/moviecomponentdata). |

### MovieComponentData {#constructor-4}

> **MovieComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MovieComponentData](/vext/ref/fb/moviecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MovieComponentData](/vext/ref/fb/moviecomponentdata). |

### MovieComponentData {#constructor-5}

> **MovieComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MovieComponentData](/vext/ref/fb/moviecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MovieComponentData](/vext/ref/fb/moviecomponentdata). |

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

The type information for the [MovieComponentData](/vext/ref/fb/moviecomponentdata) type.

