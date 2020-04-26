---
title: UIItemDescriptionAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[UIItemDescriptionAsset](#constructor-0)**() |
| **[UIItemDescriptionAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIItemDescriptionAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIItemDescriptionAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "children" >}} | [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset)[] |
| {{< prop "items" >}} | [UIItemDescription](/vext/ref/fb/uiitemdescription)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIItemDescriptionAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIItemDescriptionAsset {#constructor-0}
> **UIItemDescriptionAsset**()

Creates a new [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset) frostbite instance.

### UIItemDescriptionAsset {#constructor-1}
> **UIItemDescriptionAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIItemDescriptionAsset {#constructor-2}
> **UIItemDescriptionAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset). |

### UIItemDescriptionAsset {#constructor-3}
> **UIItemDescriptionAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset). |

## Properties
### {{% prop-heading "children" %}}
> **[UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset)**[]

### {{% prop-heading "items" %}}
> **[UIItemDescription](/vext/ref/fb/uiitemdescription)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset) type.

