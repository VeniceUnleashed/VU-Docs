---
title: UIModDescription
---

Inherits from 
[UIItemDescription](/vext/ref/fb/uiitemdescription)

## Summary
### Constructors
| |
| ----------- |
| **[UIModDescription](#constructor-0)**() |
| **[UIModDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIModDescription](#constructor-2)**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription)) |
| **[UIModDescription](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "identifier" >}} | string |
| {{< prop "shortName" >}} | string |
| {{< prop "fullName" >}} | string |
| {{< prop "desc" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIModDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIModDescription {#constructor-0}
> **UIModDescription**()

Creates a new [UIModDescription](/vext/ref/fb/uimoddescription) frostbite instance.

### UIModDescription {#constructor-1}
> **UIModDescription**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIModDescription](/vext/ref/fb/uimoddescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIModDescription {#constructor-2}
> **UIModDescription**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription))

Casts an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription) to [UIModDescription](/vext/ref/fb/uimoddescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIItemDescription](/vext/ref/fb/uiitemdescription) | The instance to cast to [UIModDescription](/vext/ref/fb/uimoddescription). |

### UIModDescription {#constructor-3}
> **UIModDescription**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIModDescription](/vext/ref/fb/uimoddescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIModDescription](/vext/ref/fb/uimoddescription). |

## Properties
### {{% prop-heading "identifier" %}}
> **string**

### {{% prop-heading "shortName" %}}
> **string**

### {{% prop-heading "fullName" %}}
> **string**

### {{% prop-heading "desc" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIModDescription](/vext/ref/fb/uimoddescription) type.

