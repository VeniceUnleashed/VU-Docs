---
title: MaterialContainerAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[MaterialContainerAsset](#constructor-0)**() |
| **[MaterialContainerAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MaterialContainerAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[MaterialContainerAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "materialPairs" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair)[] |
| {{< prop "materialNames" >}} | string[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MaterialContainerAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MaterialContainerAsset {#constructor-0}

> **MaterialContainerAsset**()

Creates a new [MaterialContainerAsset](/vext/ref/fb/materialcontainerasset) frostbite instance.

### MaterialContainerAsset {#constructor-1}

> **MaterialContainerAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MaterialContainerAsset](/vext/ref/fb/materialcontainerasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MaterialContainerAsset {#constructor-2}

> **MaterialContainerAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [MaterialContainerAsset](/vext/ref/fb/materialcontainerasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [MaterialContainerAsset](/vext/ref/fb/materialcontainerasset). |

### MaterialContainerAsset {#constructor-3}

> **MaterialContainerAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MaterialContainerAsset](/vext/ref/fb/materialcontainerasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MaterialContainerAsset](/vext/ref/fb/materialcontainerasset). |

## Properties

### {{% prop-heading "materialPairs" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)**[]

### {{% prop-heading "materialNames" %}}

> **string**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MaterialContainerAsset](/vext/ref/fb/materialcontainerasset) type.

