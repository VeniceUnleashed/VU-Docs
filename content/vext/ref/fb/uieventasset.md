---
title: UIEventAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[UIEventAsset](#constructor-0)**() |
| **[UIEventAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIEventAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIEventAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "category" >}} | string |
| {{< prop "eventList" >}} | string[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIEventAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIEventAsset {#constructor-0}
> **UIEventAsset**()

Creates a new [UIEventAsset](/vext/ref/fb/uieventasset) frostbite instance.

### UIEventAsset {#constructor-1}
> **UIEventAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIEventAsset](/vext/ref/fb/uieventasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIEventAsset {#constructor-2}
> **UIEventAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIEventAsset](/vext/ref/fb/uieventasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIEventAsset](/vext/ref/fb/uieventasset). |

### UIEventAsset {#constructor-3}
> **UIEventAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIEventAsset](/vext/ref/fb/uieventasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIEventAsset](/vext/ref/fb/uieventasset). |

## Properties
### {{% prop-heading "category" %}}
> **string**

### {{% prop-heading "eventList" %}}
> **string**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIEventAsset](/vext/ref/fb/uieventasset) type.

