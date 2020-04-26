---
title: GameDataContainerAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[GameDataContainerAsset](#constructor-0)**() |
| **[GameDataContainerAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GameDataContainerAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[GameDataContainerAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "data" >}} | [GameDataContainer](/vext/ref/fb/gamedatacontainer) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GameDataContainerAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GameDataContainerAsset {#constructor-0}

> **GameDataContainerAsset**()

Creates a new [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset) frostbite instance.

### GameDataContainerAsset {#constructor-1}

> **GameDataContainerAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GameDataContainerAsset {#constructor-2}

> **GameDataContainerAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset). |

### GameDataContainerAsset {#constructor-3}

> **GameDataContainerAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset). |

## Properties

### {{% prop-heading "data" %}}

> **[GameDataContainer](/vext/ref/fb/gamedatacontainer)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset) type.

