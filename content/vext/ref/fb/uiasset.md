---
title: UIAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[UIAsset](#constructor-0)**() |
| **[UIAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIAsset {#constructor-0}

> **UIAsset**()

Creates a new [UIAsset](/vext/ref/fb/uiasset) frostbite instance.

### UIAsset {#constructor-1}

> **UIAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIAsset](/vext/ref/fb/uiasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIAsset {#constructor-2}

> **UIAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIAsset](/vext/ref/fb/uiasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIAsset](/vext/ref/fb/uiasset). |

### UIAsset {#constructor-3}

> **UIAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIAsset](/vext/ref/fb/uiasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIAsset](/vext/ref/fb/uiasset). |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIAsset](/vext/ref/fb/uiasset) type.

