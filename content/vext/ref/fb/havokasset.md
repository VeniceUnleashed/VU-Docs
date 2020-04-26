---
title: HavokAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[HavokAsset](#constructor-0)**() |
| **[HavokAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[HavokAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[HavokAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "scale" >}} | float |
| {{< prop "externalAssets" >}} | [DataContainer](/vext/ref/shared/type/datacontainer)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HavokAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HavokAsset {#constructor-0}

> **HavokAsset**()

Creates a new [HavokAsset](/vext/ref/fb/havokasset) frostbite instance.

### HavokAsset {#constructor-1}

> **HavokAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HavokAsset](/vext/ref/fb/havokasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### HavokAsset {#constructor-2}

> **HavokAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [HavokAsset](/vext/ref/fb/havokasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [HavokAsset](/vext/ref/fb/havokasset). |

### HavokAsset {#constructor-3}

> **HavokAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [HavokAsset](/vext/ref/fb/havokasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [HavokAsset](/vext/ref/fb/havokasset). |

## Properties

### {{% prop-heading "scale" %}}

> **float**

### {{% prop-heading "externalAssets" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HavokAsset](/vext/ref/fb/havokasset) type.

