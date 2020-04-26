---
title: UIBundleAssetState
---

## Summary

### Constructors

|  |
| --- |
| **[UIBundleAssetState](#constructor-0)**() |
| **[UIBundleAssetState](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "stateName" >}} | string |
| {{< prop "uiState" >}} | [UIState](/vext/ref/fb/uistate) |
| {{< prop "resourceBundleName" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIBundleAssetState](/vext/ref/fb/uibundleassetstate) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIBundleAssetState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIBundleAssetState {#constructor-0}

> **UIBundleAssetState**()

Creates a new [UIBundleAssetState](/vext/ref/fb/uibundleassetstate) frostbite instance.

### UIBundleAssetState {#constructor-1}

> **UIBundleAssetState**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIBundleAssetState](/vext/ref/fb/uibundleassetstate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "stateName" %}}

> **string**

### {{% prop-heading "uiState" %}}

> **[UIState](/vext/ref/fb/uistate)**

### {{% prop-heading "resourceBundleName" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [UIBundleAssetState](/vext/ref/fb/uibundleassetstate)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIBundleAssetState](/vext/ref/fb/uibundleassetstate)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIBundleAssetState](/vext/ref/fb/uibundleassetstate) type.

