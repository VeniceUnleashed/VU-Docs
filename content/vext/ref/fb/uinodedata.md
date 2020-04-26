---
title: UINodeData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UINodeData](#constructor-0)**() |
| **[UINodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UINodeData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "parentGraph" >}} | [Asset](/vext/ref/fb/asset) \| nil |
| {{< prop "isRootNode" >}} | bool |
| {{< prop "parentIsScreen" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UINodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UINodeData {#constructor-0}
> **UINodeData**()

Creates a new [UINodeData](/vext/ref/fb/uinodedata) frostbite instance.

### UINodeData {#constructor-1}
> **UINodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UINodeData](/vext/ref/fb/uinodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UINodeData {#constructor-2}
> **UINodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINodeData](/vext/ref/fb/uinodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UINodeData](/vext/ref/fb/uinodedata). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "parentGraph" %}}
> **[Asset](/vext/ref/fb/asset)** | **nil**

### {{% prop-heading "isRootNode" %}}
> **bool**

### {{% prop-heading "parentIsScreen" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UINodeData](/vext/ref/fb/uinodedata) type.

