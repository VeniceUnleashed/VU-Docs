---
title: UIKitItemDescription
---

Inherits from 
[UIItemDescription](/vext/ref/fb/uiitemdescription)

## Summary
### Constructors
| |
| ----------- |
| **[UIKitItemDescription](#constructor-0)**() |
| **[UIKitItemDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIKitItemDescription](#constructor-2)**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription)) |
| **[UIKitItemDescription](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "unlockName" >}} | string |
| {{< prop "description" >}} | string |
| {{< prop "category" >}} | string |
| {{< prop "texturePath" >}} | string |
| {{< prop "iconTexturePath" >}} | string |
| {{< prop "unlockTexturePath" >}} | string |
| {{< prop "hudIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "notExplicitelySelectable" >}} | bool |
| {{< prop "hiddenInProgression" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIKitItemDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIKitItemDescription {#constructor-0}
> **UIKitItemDescription**()

Creates a new [UIKitItemDescription](/vext/ref/fb/uikititemdescription) frostbite instance.

### UIKitItemDescription {#constructor-1}
> **UIKitItemDescription**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIKitItemDescription](/vext/ref/fb/uikititemdescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIKitItemDescription {#constructor-2}
> **UIKitItemDescription**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription))

Casts an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription) to [UIKitItemDescription](/vext/ref/fb/uikititemdescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIItemDescription](/vext/ref/fb/uiitemdescription) | The instance to cast to [UIKitItemDescription](/vext/ref/fb/uikititemdescription). |

### UIKitItemDescription {#constructor-3}
> **UIKitItemDescription**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIKitItemDescription](/vext/ref/fb/uikititemdescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIKitItemDescription](/vext/ref/fb/uikititemdescription). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "unlockName" %}}
> **string**

### {{% prop-heading "description" %}}
> **string**

### {{% prop-heading "category" %}}
> **string**

### {{% prop-heading "texturePath" %}}
> **string**

### {{% prop-heading "iconTexturePath" %}}
> **string**

### {{% prop-heading "unlockTexturePath" %}}
> **string**

### {{% prop-heading "hudIcon" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "notExplicitelySelectable" %}}
> **bool**

### {{% prop-heading "hiddenInProgression" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIKitItemDescription](/vext/ref/fb/uikititemdescription) type.

