---
title: UIPartData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UIPartData](#constructor-0)**() |
| **[UIPartData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIPartData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIPartData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIPartData {#constructor-0}
> **UIPartData**()

Creates a new [UIPartData](/vext/ref/fb/uipartdata) frostbite instance.

### UIPartData {#constructor-1}
> **UIPartData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIPartData](/vext/ref/fb/uipartdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIPartData {#constructor-2}
> **UIPartData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIPartData](/vext/ref/fb/uipartdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIPartData](/vext/ref/fb/uipartdata). |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIPartData](/vext/ref/fb/uipartdata) type.

