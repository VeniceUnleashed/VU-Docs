---
title: UIBundleAssetState
---


## Summary
### Constructors
| |
| ----------- |
| **[UIBundleAssetState](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "stateName" >}} | string |
| {{< prop "uiState" >}} | [UIState](/vext/ref/fb/uistate) |
| {{< prop "resourceBundleName" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIBundleAssetState](/vext/ref/fb/uibundleassetstate) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIBundleAssetState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIBundleAssetState {#constructor-0}
> **UIBundleAssetState**()

Creates a new [UIBundleAssetState](/vext/ref/fb/uibundleassetstate) frostbite structure.

## Properties
### {{% prop-heading "stateName" %}}
> **string**

### {{% prop-heading "uiState" %}}
> **[UIState](/vext/ref/fb/uistate)**

### {{% prop-heading "resourceBundleName" %}}
> **string**

## Methods
### Clone
> **Clone**(): [UIBundleAssetState](/vext/ref/fb/uibundleassetstate)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIBundleAssetState](/vext/ref/fb/uibundleassetstate)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIBundleAssetState](/vext/ref/fb/uibundleassetstate) type.

