---
title: UIItemDescription
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UIItemDescription](#constructor-0)**() |
| **[UIItemDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIItemDescription](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "itemIds" >}} | int[] |
| {{< prop "ignoreBuild" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIItemDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIItemDescription {#constructor-0}
> **UIItemDescription**()

Creates a new [UIItemDescription](/vext/ref/fb/uiitemdescription) frostbite instance.

### UIItemDescription {#constructor-1}
> **UIItemDescription**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIItemDescription](/vext/ref/fb/uiitemdescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIItemDescription {#constructor-2}
> **UIItemDescription**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIItemDescription](/vext/ref/fb/uiitemdescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIItemDescription](/vext/ref/fb/uiitemdescription). |

## Properties
### {{% prop-heading "itemIds" %}}
> **int**[]

### {{% prop-heading "ignoreBuild" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIItemDescription](/vext/ref/fb/uiitemdescription) type.

