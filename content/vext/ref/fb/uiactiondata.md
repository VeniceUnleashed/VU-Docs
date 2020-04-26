---
title: UIActionData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[UIActionData](#constructor-0)**() |
| **[UIActionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIActionData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIActionData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "actionKeys" >}} | string[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIActionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIActionData {#constructor-0}
> **UIActionData**()

Creates a new [UIActionData](/vext/ref/fb/uiactiondata) frostbite instance.

### UIActionData {#constructor-1}
> **UIActionData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIActionData](/vext/ref/fb/uiactiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIActionData {#constructor-2}
> **UIActionData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIActionData](/vext/ref/fb/uiactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIActionData](/vext/ref/fb/uiactiondata). |

### UIActionData {#constructor-3}
> **UIActionData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIActionData](/vext/ref/fb/uiactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIActionData](/vext/ref/fb/uiactiondata). |

## Properties
### {{% prop-heading "actionKeys" %}}
> **string**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIActionData](/vext/ref/fb/uiactiondata) type.

