---
title: ManualDataAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[ManualDataAsset](#constructor-0)**() |
| **[ManualDataAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ManualDataAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[ManualDataAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "entries" >}} | [ManualDataEntry](/vext/ref/fb/manualdataentry)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ManualDataAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ManualDataAsset {#constructor-0}

> **ManualDataAsset**()

Creates a new [ManualDataAsset](/vext/ref/fb/manualdataasset) frostbite instance.

### ManualDataAsset {#constructor-1}

> **ManualDataAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ManualDataAsset](/vext/ref/fb/manualdataasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ManualDataAsset {#constructor-2}

> **ManualDataAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [ManualDataAsset](/vext/ref/fb/manualdataasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [ManualDataAsset](/vext/ref/fb/manualdataasset). |

### ManualDataAsset {#constructor-3}

> **ManualDataAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ManualDataAsset](/vext/ref/fb/manualdataasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ManualDataAsset](/vext/ref/fb/manualdataasset). |

## Properties

### {{% prop-heading "entries" %}}

> **[ManualDataEntry](/vext/ref/fb/manualdataentry)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ManualDataAsset](/vext/ref/fb/manualdataasset) type.

