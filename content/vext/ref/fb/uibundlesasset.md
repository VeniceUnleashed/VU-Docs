---
title: UIBundlesAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[UIBundlesAsset](#constructor-0)**() |
| **[UIBundlesAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIBundlesAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIBundlesAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "uiBundleAssetStateList" >}} | [UIBundleAssetState](/vext/ref/fb/uibundleassetstate)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIBundlesAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIBundlesAsset {#constructor-0}

> **UIBundlesAsset**()

Creates a new [UIBundlesAsset](/vext/ref/fb/uibundlesasset) frostbite instance.

### UIBundlesAsset {#constructor-1}

> **UIBundlesAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIBundlesAsset](/vext/ref/fb/uibundlesasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIBundlesAsset {#constructor-2}

> **UIBundlesAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIBundlesAsset](/vext/ref/fb/uibundlesasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIBundlesAsset](/vext/ref/fb/uibundlesasset). |

### UIBundlesAsset {#constructor-3}

> **UIBundlesAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIBundlesAsset](/vext/ref/fb/uibundlesasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIBundlesAsset](/vext/ref/fb/uibundlesasset). |

## Properties

### {{% prop-heading "uiBundleAssetStateList" %}}

> **[UIBundleAssetState](/vext/ref/fb/uibundleassetstate)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIBundlesAsset](/vext/ref/fb/uibundlesasset) type.

