---
title: UIGenericItemDescription
---

Inherits from 
[UIItemDescription](/vext/ref/fb/uiitemdescription)

## Summary
### Constructors
| |
| ----------- |
| **[UIGenericItemDescription](#constructor-0)**() |
| **[UIGenericItemDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIGenericItemDescription](#constructor-2)**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription)) |
| **[UIGenericItemDescription](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "identifier" >}} | string |
| {{< prop "imagePath" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIGenericItemDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIGenericItemDescription {#constructor-0}
> **UIGenericItemDescription**()

Creates a new [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription) frostbite instance.

### UIGenericItemDescription {#constructor-1}
> **UIGenericItemDescription**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIGenericItemDescription {#constructor-2}
> **UIGenericItemDescription**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription))

Casts an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription) to [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIItemDescription](/vext/ref/fb/uiitemdescription) | The instance to cast to [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription). |

### UIGenericItemDescription {#constructor-3}
> **UIGenericItemDescription**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription). |

## Properties
### {{% prop-heading "identifier" %}}
> **string**

### {{% prop-heading "imagePath" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription) type.

